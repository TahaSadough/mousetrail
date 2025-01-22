import { MouseTrailOptions, Point, Size } from './interfaces';

export class MouseTrail {
  /** base styles for mouse trail
   * @private
   * @static
   * @readonly
   */
  private static readonly BASE_STYLES =
    'border-radius:1.5rem;position:fixed;top:0;left:0;transition:all .17s linear;z-index:99999;pointer-events:none;';

  /** Default options for the mouse trail
   * @protected
   */
  _defaultOptions: MouseTrailOptions = {
    backgroundColor: '#ffffff',
    size: { width: 12, height: 12 },
    expandOnClick: true,
  };

  /** The container element for the mouse trail
   * @private
   */
  #container: HTMLElement;

  /** The options for the mouse trail
   * @private
   */
  #options: MouseTrailOptions;

  /** The HTML element representing the mouse trail
   * @private
   */
  #mouseTrailNode: HTMLElement;

  /**
   * Creates the mouse trail HTML element
   * @private
   * @returns {HTMLElement} The created mouse trail element
   */
  #create(): HTMLElement {
    const mouseTrail: HTMLElement = document.createElement('div');
    mouseTrail.className = 'mousetrail';
    return mouseTrail;
  }

  /**
   * Adjusts the styles and position of the mouse trail
   * @private
   */
  #adjustments(): void {
    this.#adjustStyles();
    this.#adjustPos();
    if (this.#options.expandOnClick) this.#expandOnClick();
  }

  /**
   * Adjusts the styles of the mouse trail based on options
   * @private
   */
  #adjustStyles(): void {
    this.#mouseTrailNode.style.cssText = `${
      MouseTrail.BASE_STYLES
    } background-color:${this.#options.backgroundColor};width:${
      this.#options.size?.width
    }px;height:${this.#options.size?.height}px;`;
  }

  /**
   * Updates the position of the mouse trail based on mouse movement
   * @private
   */
  #adjustPos(): void {
    document.addEventListener('mousemove', (e: MouseEvent) => {
      const updatePos = () => {
        const point: Point = {
          x: e.clientX - 5,
          y: e.clientY - 5,
        };

        this.#mouseTrailNode.style.left = `${point.x}px`;
        this.#mouseTrailNode.style.top = `${point.y}px`;
      };

      requestAnimationFrame(updatePos);
    });
  }

  /**
   * Expands the size of the mouse trail when clicked and returns to original size after transition
   * @private
   */
  #expandOnClick(): void {
    const setSize = (size: Size) => {
      this.#mouseTrailNode.style.width = `${size.width}px`;
      this.#mouseTrailNode.style.height = `${size.height}px`;
    };

    document.addEventListener('click', () => {
      setSize({
        width: this.#options.size!.width + 10,
        height: this.#options.size!.height + 10,
      });

      this.#mouseTrailNode.addEventListener('transitionend', () => {
        setSize(this.#options.size!);
      });
    });
  }

  /**
   * Appends the mouse trail element to the container
   * @private
   */
  #appendToContainer(): void {
    this.#container.appendChild(this.#mouseTrailNode);
  }

  /**
   * Creates an instance of MouseTrail with specified options
   * @param {MouseTrailOptions} options - The options for configuring the mouse trail
   */
  constructor(options: MouseTrailOptions) {
    this.#options = { ...this._defaultOptions, ...options };
    this.#mouseTrailNode = this.#create();
    this.#container = document.body;
    this.#appendToContainer();
    this.#adjustments();
  }
}
