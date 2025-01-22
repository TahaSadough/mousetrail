import { MouseTrailOptions } from './interfaces';
import { MouseTrail } from './mousetrail';

const createMouseTrail = (options: MouseTrailOptions) =>
  new MouseTrail(options);

const mouseTrail = Object.assign(
  (options?: MouseTrailOptions) => createMouseTrail(options!),
  {
    distroy: () => {
      document.querySelector('.mousetrail')?.remove();
    },
  }
);

export default mouseTrail;
