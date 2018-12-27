export interface IWebConfigConstructorOptions {
  /**
   * the name of the website
   */
  name: string;

  /**
   * description
   */
  description: string;

  /**
   * The Google analytics code
   */
  gaCode: string;

  /**
   * the fullstory organizationCode
   */
  fsCode: string;
}

export class WebConfig implements IWebConfigConstructorOptions {
  public name: string;
  public description: string;
  public gaCode: string;
  public fsCode: string;
  constructor(optionsArg: IWebConfigConstructorOptions) {
    Object.keys(optionsArg).map(key => {
      this[key] = optionsArg[key];
    });
  }
}