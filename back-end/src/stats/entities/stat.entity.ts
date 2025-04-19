import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'stats'})
export class Stat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: 'int', nullable: false})
    count: number;

    @Column({type: 'varchar', nullable: true})
    highlight: string;

    @Column({type: 'varchar', nullable: true})
    description: string;
}
