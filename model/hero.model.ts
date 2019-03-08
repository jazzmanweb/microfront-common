import {HeroTypeEnum} from './hero-type.enum';
import {HeroInterface} from './hero.interface';

export class HeroModel implements Required<HeroInterface> {
    public name: string;
    public type: HeroTypeEnum;

    constructor(options?: Partial<HeroInterface>) {
        options = options || {};
        this.name = options.name || null;
        this.type = options.type || null;
    }
}