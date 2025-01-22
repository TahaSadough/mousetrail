import { MouseTrailOptions } from './interfaces';
import { MouseTrail } from './mousetrail';

const newMouseTrailInstance = (options: MouseTrailOptions) =>
  new MouseTrail(options);

const createMT = Object.assign(
  (options?: MouseTrailOptions) => newMouseTrailInstance(options!),
  {
    distroy: () => {
      document.querySelector('.mousetrail')?.remove();
    },
  }
);

export default createMT;
