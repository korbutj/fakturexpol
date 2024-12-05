export interface FirmModel {
    firmName: string;
    street: string;
    city: string;
    zipCode: string;
    firmIdNumber: string;
}

export function GetDefaultFirmModel() : FirmModel
{
    return { firmName: '', street: '', city: '', zipCode: '', firmIdNumber: '' };
}
