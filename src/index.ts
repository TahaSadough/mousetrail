import { MouseTrailOptions } from './interfaces';
import { MouseTrail } from './mousetrail';

const newMouseTrailInstance = (options: MouseTrailOptions) =>
  new MouseTrail(options);

const createMT = (options?: MouseTrailOptions) =>
  newMouseTrailInstance(options!);

export default createMT;
