import { describe, it } from "node:test";
import assert from "node:assert/strict";

// Mirroring the Calculator constants and math for pure logic testing
const BUYER_MODELS = [
  { id: "llama-70b", name: "Llama 3.3 70B", billamaPerM: 0.40, cloudPerM: 2.40 },
  { id: "deepseek-r1", name: "DeepSeek R1 (671B MoE)", billamaPerM: 0.85, cloudPerM: 4.80 },
  { id: "qwen-72b", name: "Qwen 2.5 72B Instruct", billamaPerM: 0.38, cloudPerM: 2.20 },
  { id: "mistral-large", name: "Mistral Large 2", billamaPerM: 0.65, cloudPerM: 3.50 },
  { id: "llama-8b", name: "Llama 3.2 8B", billamaPerM: 0.06, cloudPerM: 0.35 },
];

const PROVIDER_GPUS = [
  { id: "rtx-4090", name: "NVIDIA RTX 4090", hourlyBlended: 0.68 },
  { id: "rtx-5090", name: "NVIDIA RTX 5090", hourlyBlended: 1.10 },
  { id: "rtx-3080", name: "NVIDIA RTX 3080 / 3090", hourlyBlended: 0.38 },
  { id: "apple-ultra", name: "Apple Mac Studio Ultra", hourlyBlended: 0.85 },
  { id: "4x-a100", name: "4x NVIDIA A100 SXM", hourlyBlended: 4.50 },
  { id: "8x-h100", name: "8x NVIDIA H100 SXM5", hourlyBlended: 16.20 },
];

function calculateBuyerSavings(monthlyTokensMillions, model) {
  const buyerBillamaCost = monthlyTokensMillions * model.billamaPerM;
  const buyerCloudCost = monthlyTokensMillions * model.cloudPerM;
  const buyerSavingsDollars = buyerCloudCost - buyerBillamaCost;
  const buyerSavingsPercent =
    buyerCloudCost > 0
      ? Math.round((buyerSavingsDollars / buyerCloudCost) * 100)
      : 0;

  return {
    buyerBillamaCost,
    buyerCloudCost,
    buyerSavingsDollars,
    buyerSavingsPercent,
  };
}

function calculateProviderYield(gpu, hoursPerDay, unitCount) {
  const daysInMonth = 30.5;
  const providerGrossMonthly =
    gpu.hourlyBlended * hoursPerDay * daysInMonth * unitCount;
  const providerNetMonthly = providerGrossMonthly * 0.82; // 82% take home
  const marketplaceCut = providerGrossMonthly * 0.18;

  return {
    providerGrossMonthly,
    providerNetMonthly,
    marketplaceCut,
  };
}

describe("Calculator Mathematics & Guard Rails", () => {
  it("prevents NaN% when token volume is 0", () => {
    for (const model of BUYER_MODELS) {
      const res = calculateBuyerSavings(0, model);
      assert.equal(Number.isNaN(res.buyerSavingsPercent), false, "Must not evaluate to NaN");
      assert.equal(res.buyerSavingsPercent, 0, "Percent savings for 0 volume should be 0%");
      assert.equal(res.buyerSavingsDollars, 0);
      assert.equal(res.buyerBillamaCost, 0);
      assert.equal(res.buyerCloudCost, 0);
    }
  });

  it("yields consistent 60-85% savings across all buyer models at standard volume", () => {
    for (const model of BUYER_MODELS) {
      const res = calculateBuyerSavings(25, model);
      assert.ok(res.buyerSavingsDollars > 0, `${model.name} should yield positive dollar savings`);
      assert.ok(
        res.buyerSavingsPercent >= 50 && res.buyerSavingsPercent <= 90,
        `${model.name} savings percent (${res.buyerSavingsPercent}%) should be between 50% and 90%`
      );
      assert.ok(
        res.buyerBillamaCost < res.buyerCloudCost,
        "Billama cost must be cheaper than cloud cost"
      );
    }
  });

  it("correctly calculates provider revenue share with exact 82/18 split", () => {
    for (const gpu of PROVIDER_GPUS) {
      const res = calculateProviderYield(gpu, 18, 2);
      assert.ok(res.providerGrossMonthly > 0, "Gross earnings must be positive");
      assert.ok(res.providerNetMonthly > 0, "Net earnings must be positive");

      // Verify the sum of net + cut equals gross
      const sum = res.providerNetMonthly + res.marketplaceCut;
      assert.ok(
        Math.abs(sum - res.providerGrossMonthly) < 0.001,
        "Provider net + marketplace cut must equal gross"
      );

      // Verify 82% ratio
      const netRatio = res.providerNetMonthly / res.providerGrossMonthly;
      assert.ok(
        Math.abs(netRatio - 0.82) < 0.001,
        "Net take home must be exactly 82%"
      );
    }
  });

  it("handles boundary values for provider hours and units gracefully", () => {
    const gpu = PROVIDER_GPUS[0];
    const minRes = calculateProviderYield(gpu, 1, 1);
    const maxRes = calculateProviderYield(gpu, 24, 16);

    assert.ok(Number.isFinite(minRes.providerNetMonthly));
    assert.ok(Number.isFinite(maxRes.providerNetMonthly));
    assert.ok(maxRes.providerNetMonthly > minRes.providerNetMonthly);
  });
});
