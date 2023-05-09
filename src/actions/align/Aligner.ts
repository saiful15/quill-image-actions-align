import { Alignment } from './Alignment';

export interface Aligner {
  getAlignments(): Alignment[];
  isAligned(el: HTMLElement, alignment: Alignment): boolean;
  clear(el: HTMLElement): void;
}
