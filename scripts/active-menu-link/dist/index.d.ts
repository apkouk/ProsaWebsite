/// <reference types="lib" />
declare class ActiveMenuLink {
    manuSelector: string;
    menu: Element;
    links: NodeList;
    activeIndex: number;
    defaultLink: HTMLElement;
    nameAttribute: string;
    /**
     * Default parameters.
     */
    params: IParameters;
    constructor(menuSelector: string, args?: IParameters);
    private getLinks;
    private getDefaultLink;
    private setNames;
    private setDefaultActive;
    private unsetDefaultActive;
    private onScrollLinks;
    private onClickLinks;
}
export default ActiveMenuLink;
