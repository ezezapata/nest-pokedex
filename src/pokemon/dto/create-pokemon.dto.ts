import { IsInt, IsNotEmpty, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsInt()
    @Min(0)
    @IsPositive()
    @IsNotEmpty()
    no: number;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    name: string;
}
