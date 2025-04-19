import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'drones'})
export class Drone {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique: true, nullable: false, type: 'varchar'})
    serialNumber: string;

    @Column({type: 'int'})
    battery: number;

    @Column({type: 'varchar'})
    status: 'working' | 'under maintenance' | 'out of service';
}
