export class CreateDroneDto {
    name: string;
    serialNumber: string;
    battery: number;
    status: 'working' | 'under maintenance' | 'out of service';
}
