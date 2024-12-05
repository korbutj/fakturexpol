import { ValueModel } from "../models/ValueModel";
import { Configuration } from "../configuration";

export function GetVatPercent(value: ValueModel): number {
    return (value.vatPercent ?? Configuration.defaultVatValue / 100);
}

export class ValueCalculator {

    public static CalculateNetValue(value: ValueModel): number {
        return value.value * (value.amount ?? 1);
    }

    public static CalculateVatValue(value: ValueModel): number {
        return value.value * (value.amount ?? 1) * GetVatPercent(value);
    }

    public static CalculateGrossValue(value: ValueModel): number {
        return value.value * (value.amount ?? 1) * (1 + GetVatPercent(value));
    }

    public static CalculateTotalVatValue(items: Array<ValueModel>): number {
        return items.reduce((a,x) => a + ValueCalculator.CalculateVatValue(x), 0);
    }

    public static CalculateTotalNetValue(items: Array<ValueModel>): number {
        return items.reduce((a,x) => a + ValueCalculator.CalculateNetValue(x), 0);
    }

    public static CalculateTotalGrossValue(items: Array<ValueModel>): number {
        return items.reduce((a,x) => a + ValueCalculator.CalculateGrossValue(x), 0);
    }
}