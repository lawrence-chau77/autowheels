import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    text: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyling: string;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface CarDetailedProps {
    modalOpen: boolean;
    closeModal: () => void;
    car: CarProps
}

export interface HeartButtonProps {
    heart: boolean;
    closeHeart: () => void;
    openHeart: () => void;
}

export interface FilterProps {
    selectedBrand: string;
    year: number;
    fuel: string;
    limit: number;
    transmission: string;
    drive: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string,
    options: OptionProps[]
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}