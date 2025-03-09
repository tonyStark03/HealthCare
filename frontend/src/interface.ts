export interface cardInterface{
    title:string;
    text: string;
    img: string
    style:string
}

export interface SpecialitiesInterface{
    title:string;
    img: string

}

export interface ClinicConsultationInterface{
    img : string
    title: string
    text: string
}

export interface Doctors{
    name: string;
    image: string;
    field: string;
    experience: string;
    city: string;
    fees: number;
    rating: string;
    reviews: string;
}