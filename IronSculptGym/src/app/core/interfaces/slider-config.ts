export interface SliderConfigI {
    slidesToShow: number,
    slidesToScroll: number,
    infinite: boolean,
    centerMode: boolean,
    prevArrow?: string | HTMLElement,
    nextArrow?: string | HTMLElement,
    responsive?: SliderResponsiveI[]
}

export interface SliderResponsiveI {
    breakpoint: number,
    settings: SliderResponsiveSettingsI;
}

export interface SliderResponsiveSettingsI {
    slidesToShow: number,
    slidesToScroll: number,
}
