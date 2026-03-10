import {
  ModalService
} from "./chunk-K5OANHGI.js";
import {
  NotificationService
} from "./chunk-A4HOYT66.js";
import {
  ConfirmService
} from "./chunk-YC4BKLUZ.js";
import {
  ProductService
} from "./chunk-M7BLKAAD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QGP2PKSJ.js";
import {
  MessageService
} from "./chunk-JLEF55SF.js";
import {
  CartService
} from "./chunk-5ZAXXMJQ.js";
import {
  AuthService
} from "./chunk-QQSXDC4N.js";
import {
  BrowserModule,
  DomRendererFactory2,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-JDYM2Z3R.js";
import {
  environment,
  provideHttpClient,
  withInterceptors
} from "./chunk-QLMOGZJX.js";
import {
  ANIMATION_MODULE_TYPE,
  CommonModule,
  Component,
  DOCUMENT,
  DecimalPipe,
  ElementRef,
  HostListener,
  Inject,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  RendererFactory2,
  RuntimeError,
  Subject,
  __objRest,
  __spreadValues,
  debounceTime,
  distinctUntilChanged,
  filter,
  inject,
  performanceMarkFeature,
  setClassMetadata,
  switchMap,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-IXUP4X5N.js";

// node_modules/@angular/animations/fesm2022/private_export-faY_wCkZ.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
var NoopAnimationPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  _started = false;
  _destroyed = false;
  _finished = false;
  _position = 0;
  parentPlayer = null;
  totalTime;
  constructor(duration = 0, delay = 0) {
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  _onDoneFns = [];
  _onStartFns = [];
  _finished = false;
  _started = false;
  _destroyed = false;
  _onDestroyFns = [];
  parentPlayer = null;
  totalTime = 0;
  players;
  constructor(_players) {
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/util-D9FfmVnv.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number") return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2) return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1) return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = /* @__PURE__ */ new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}

// node_modules/@angular/animations/fesm2022/browser.mjs
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static \u0275fac = function NoopAnimationDriver_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationDriver)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NoopAnimationDriver,
    factory: _NoopAnimationDriver.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  /**
   * @deprecated Use the NoopAnimationDriver class.
   */
  static NOOP = new NoopAnimationDriver();
};
var AnimationStyleNormalizer = class {
};
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = /* @__PURE__ */ new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  _driver;
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string") return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  errors;
  queryCount = 0;
  depCount = 0;
  currentTransition = null;
  currentQuery = null;
  currentQuerySelector = null;
  currentAnimateTimings = null;
  currentTime = 0;
  collectedStyles = /* @__PURE__ */ new Map();
  options = null;
  unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  constructor(errors) {
    this.errors = errors;
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string") return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  _map = /* @__PURE__ */ new Map();
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = /* @__PURE__ */ new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = /* @__PURE__ */ new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  _driver;
  element;
  subInstructions;
  _enterClassName;
  _leaveClassName;
  errors;
  timelines;
  parentContext = null;
  currentTimeline;
  currentAnimateTimings = null;
  previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
  subContextCount = 0;
  options = {};
  currentQueryIndex = 0;
  currentQueryTotal = 0;
  currentStaggerTime = 0;
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options) return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  _driver;
  element;
  startTime;
  _elementTimelineStylesLookup;
  duration = 0;
  easing = null;
  _previousKeyframe = /* @__PURE__ */ new Map();
  _currentKeyframe = /* @__PURE__ */ new Map();
  _keyframes = /* @__PURE__ */ new Map();
  _styleSummary = /* @__PURE__ */ new Map();
  _localTimelineStyles = /* @__PURE__ */ new Map();
  _globalTimelineStyles;
  _pendingStyles = /* @__PURE__ */ new Map();
  _backFill = /* @__PURE__ */ new Map();
  _currentEmptyStepKeyframe = null;
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0) return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  keyframes;
  preStyleProps;
  postStyleProps;
  _stretchStartingKeyframe;
  timings;
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  _triggerName;
  ast;
  _stateStyles;
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  styles;
  defaultParams;
  normalizer;
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  name;
  ast;
  _normalizer;
  transitionFactories = [];
  fallbackTransition;
  states = /* @__PURE__ */ new Map();
  constructor(name, ast, _normalizer) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer;
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = /* @__PURE__ */ new ElementInstructionMap();
var TimelineAnimationEngine = class {
  bodyNode;
  _driver;
  _normalizer;
  _animations = /* @__PURE__ */ new Map();
  _playersById = /* @__PURE__ */ new Map();
  players = [];
  constructor(bodyNode, _driver, _normalizer) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer;
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnRegister(warnings);
        }
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  namespaceId;
  value;
  options;
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = /* @__PURE__ */ new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  id;
  hostElement;
  _engine;
  players = [];
  _triggers = /* @__PURE__ */ new Map();
  _queue = [];
  _elementListeners = /* @__PURE__ */ new Map();
  _hostClassName;
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback) return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG]) return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName)) return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true)) return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed) return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  bodyNode;
  driver;
  _normalizer;
  players = [];
  newHostElements = /* @__PURE__ */ new Map();
  playersByElement = /* @__PURE__ */ new Map();
  playersByQueriedElement = /* @__PURE__ */ new Map();
  statesByElement = /* @__PURE__ */ new Map();
  disabledNodes = /* @__PURE__ */ new Set();
  totalAnimations = 0;
  totalQueuedPlayers = 0;
  _namespaceLookup = {};
  _namespaceList = [];
  _flushFns = [];
  _whenQuietFns = [];
  namespacesByHostElement = /* @__PURE__ */ new Map();
  collectedEnterElements = [];
  collectedLeaveElements = [];
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer;
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId) return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element)) return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0) return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation) continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued) return;
          if (!isRemovalAnimation && player.triggerName != triggerName) return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId) return false;
        if (triggerName && triggerName != player.triggerName) return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried) return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  namespaceId;
  triggerName;
  element;
  _player = new NoopAnimationPlayer();
  _containsRealPlayer = false;
  _queuedCallbacks = /* @__PURE__ */ new Map();
  destroyed = false;
  parentPlayer = null;
  markedForDestroy = false;
  disabled = false;
  queued = true;
  totalTime = 0;
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer) return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0) return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node) return NULL_NODE;
    let root = localRootMap.get(node);
    if (root) return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length) return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop]) return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry) return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  _driver;
  _normalizer;
  _transitionEngine;
  _timelineEngine;
  _triggerCache = {};
  // this method is designed to be overridden by the code that uses this engine
  onRemovalComplete = (element, context) => {
  };
  constructor(doc, _driver, _normalizer) {
    this._driver = _driver;
    this._normalizer = _normalizer;
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        if (warnings.length) {
          warnTriggerBuild(name, warnings);
        }
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  _element;
  _startStyles;
  _endStyles;
  static initialStylesByElement = /* @__PURE__ */ new WeakMap();
  _state = 0;
  _initialStyles;
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  element;
  keyframes;
  options;
  _specialStyles;
  _onDoneFns = [];
  _onStartFns = [];
  _onDestroyFns = [];
  _duration;
  _delay;
  _initialized = false;
  _finished = false;
  _started = false;
  _destroyed = false;
  _finalKeyframe;
  // the following original fns are persistent copies of the _onStartFns and _onDoneFns
  // and are used to reset the fns to their original values upon reset()
  // (since the _onStartFns and _onDoneFns get deleted after they are called)
  _originalOnDoneFns = [];
  _originalOnStartFns = [];
  // using non-null assertion because it's re(set) by init();
  domPlayer;
  time = 0;
  parentPlayer = null;
  currentSnapshot = /* @__PURE__ */ new Map();
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized) return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  namespaceId;
  delegate;
  engine;
  _onDestroy;
  // We need to explicitly type this property because of an api-extractor bug
  // See https://github.com/microsoft/rushstack/issues/4390
  \u0275type = 0;
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    if (this.parentNode(oldChild)) {
      this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
    }
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    return this.delegate.listen(target, eventName, callback, options);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  factory;
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback, options) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  delegate;
  engine;
  _zone;
  _currentId = 0;
  _microtaskId = 1;
  _animationCallbacksBuffer = [];
  _rendererCache = /* @__PURE__ */ new Map();
  _cdRecurDepth = 0;
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    engine.onRemovalComplete = (element, delegate2) => {
      delegate2?.removeChild(null, element);
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this.engine.flush();
    this.delegate.componentReplaced?.(componentId);
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer);
  }
  ngOnDestroy() {
    this.flush();
  }
  static \u0275fac = function InjectableAnimationEngine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _InjectableAnimationEngine,
    factory: _InjectableAnimationEngine.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_ANIMATIONS_PROVIDERS = [
  // Note: the `ngServerMode` happen inside factories to give the variable time to initialize.
  {
    provide: AnimationDriver,
    useFactory: () => false ? new NoopAnimationDriver() : new WebAnimationsDriver()
  },
  {
    provide: ANIMATION_MODULE_TYPE,
    useFactory: () => false ? "NoopAnimations" : "BrowserAnimations"
  },
  ...SHARED_ANIMATION_PROVIDERS
];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```ts
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static \u0275fac = function BrowserAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowserAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _BrowserAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static \u0275fac = function NoopAnimationsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoopAnimationsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _NoopAnimationsModule,
    exports: [BrowserModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
    imports: [BrowserModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/core/guards/auth.guard.ts
var authGuard = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isLoggedIn)
    return true;
  router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
  return false;
};

// src/app/core/guards/admin.guard.ts
var adminGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAdmin)
    return true;
  router.navigate(["/"]);
  return false;
};

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZLUMMPH5.js").then((m) => m.HomeComponent)
  },
  {
    path: "products",
    loadComponent: () => import("./chunk-GRK7SBAJ.js").then((m) => m.ProductListComponent)
  },
  {
    path: "products/:id",
    loadComponent: () => import("./chunk-DCEVMHWB.js").then((m) => m.ProductDetailComponent)
  },
  {
    path: "cart",
    loadComponent: () => import("./chunk-44AOWKB7.js").then((m) => m.CartComponent)
  },
  {
    path: "checkout",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-RBHLJBDQ.js").then((m) => m.CheckoutComponent)
  },
  {
    path: "checkout/confirmation",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-TOKYPSG6.js").then((m) => m.OrderConfirmationComponent)
  },
  {
    path: "orders",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-ZFGW6I7Y.js").then((m) => m.OrderListComponent)
  },
  {
    path: "orders/:id",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-CR67DDK7.js").then((m) => m.OrderDetailComponent)
  },
  {
    path: "wishlist",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-V5CTT4UJ.js").then((m) => m.WishlistComponent)
  },
  {
    path: "profile",
    canActivate: [authGuard],
    loadComponent: () => import("./chunk-FPXAPF3A.js").then((m) => m.ProfileComponent)
  },
  {
    path: "auth/login",
    loadComponent: () => import("./chunk-JV2HTEGR.js").then((m) => m.LoginComponent)
  },
  {
    path: "auth/register",
    loadComponent: () => import("./chunk-UPH3ZP5A.js").then((m) => m.RegisterComponent)
  },
  {
    path: "auth/forgot-password",
    loadComponent: () => import("./chunk-WBA5EFLH.js").then((m) => m.ForgotPasswordComponent)
  },
  {
    path: "admin",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-O4C72XY7.js").then((m) => m.AdminDashboardComponent)
  },
  {
    path: "admin/products",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-LMKSP32S.js").then((m) => m.ManageProductsComponent)
  },
  {
    path: "admin/categories",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-NGL62S2W.js").then((m) => m.ManageCategoriesComponent)
  },
  {
    path: "admin/orders",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-YAPUL432.js").then((m) => m.ManageOrdersComponent)
  },
  {
    path: "admin/users",
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import("./chunk-VILLHMJJ.js").then((m) => m.ManageUsersComponent)
  },
  {
    path: "ui",
    loadComponent: () => import("./chunk-FSRXLG6C.js").then((m) => m.UiShowcaseComponent)
  },
  { path: "**", redirectTo: "" }
];

// src/app/core/interceptors/auth.interceptor.ts
var authInterceptor = (req, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations()
  ]
};

// src/app/shared/components/navbar/navbar.component.ts
function NavbarComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "i", 24);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function NavbarComponent_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_10_button_4_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((s_r7.category == null ? null : s_r7.category.name) || s_r7.category);
  }
}
function NavbarComponent_div_10_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("mouseenter", function NavbarComponent_div_10_button_4_Template_button_mouseenter_0_listener() {
      const i_r6 = \u0275\u0275restoreView(_r5).index;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectedSuggestion = i_r6);
    })("click", function NavbarComponent_div_10_button_4_Template_button_click_0_listener() {
      const s_r7 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.pickSuggestion(s_r7));
    });
    \u0275\u0275element(1, "img", 34);
    \u0275\u0275elementStart(2, "div", 35)(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, NavbarComponent_div_10_button_4_span_8_Template, 2, 1, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r7 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("highlighted", i_r6 === ctx_r2.selectedSuggestion);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getSugImage(s_r7), \u0275\u0275sanitizeUrl)("alt", s_r7.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 7, s_r7.price, "1.2-2"), "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r7.category);
  }
}
function NavbarComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "i", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NavbarComponent_div_10_button_4_Template, 9, 10, "button", 30);
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function NavbarComponent_div_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onSearch());
    });
    \u0275\u0275element(6, "i", 32);
    \u0275\u0275text(7, " View all results ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(' Results for "', ctx_r2.searchQuery, '" ');
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.suggestions);
  }
}
function NavbarComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 40);
    \u0275\u0275element(2, "i", 41);
    \u0275\u0275text(3, " Connect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function NavbarComponent_div_18_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 48);
    \u0275\u0275listener("error", function NavbarComponent_div_18_img_3_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onAvatarError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.userAvatar, \u0275\u0275sanitizeUrl);
  }
}
function NavbarComponent_div_18_div_6_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 59);
  }
}
function NavbarComponent_div_18_div_6_a_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 62);
    \u0275\u0275listener("click", function NavbarComponent_div_18_div_6_a_13_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.closeMenu());
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Admin ");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 51);
    \u0275\u0275listener("click", function NavbarComponent_div_18_div_6_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMenu());
    });
    \u0275\u0275element(4, "i", 52);
    \u0275\u0275text(5, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 53);
    \u0275\u0275listener("click", function NavbarComponent_div_18_div_6_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMenu());
    });
    \u0275\u0275element(7, "i", 54);
    \u0275\u0275text(8, " Orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 55);
    \u0275\u0275listener("click", function NavbarComponent_div_18_div_6_Template_a_click_9_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMenu());
    });
    \u0275\u0275element(10, "i", 56);
    \u0275\u0275text(11, " Wishlist ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, NavbarComponent_div_18_div_6_div_12_Template, 1, 0, "div", 57)(13, NavbarComponent_div_18_div_6_a_13_Template, 3, 0, "a", 58);
    \u0275\u0275element(14, "div", 59);
    \u0275\u0275elementStart(15, "button", 60);
    \u0275\u0275listener("click", function NavbarComponent_div_18_div_6_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275element(16, "i", 61);
    \u0275\u0275text(17, " Sign Out ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.userName);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.isAdmin);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isAdmin);
  }
}
function NavbarComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43);
    \u0275\u0275listener("click", function NavbarComponent_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMenu());
    });
    \u0275\u0275elementStart(2, "span", 44);
    \u0275\u0275template(3, NavbarComponent_div_18_img_3_Template, 1, 1, "img", 45);
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, NavbarComponent_div_18_div_6_Template, 18, 3, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.userAvatar);
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", ctx_r2.userAvatar ? "none" : "flex");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.userInitial);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.menuOpen);
  }
}
function NavbarComponent_div_23_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function NavbarComponent_div_23_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSearch());
    });
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_23_div_7_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function NavbarComponent_div_23_div_7_button_1_Template_button_click_0_listener() {
      const s_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      ctx_r2.pickSuggestion(s_r15);
      return \u0275\u0275resetView(ctx_r2.searchOpen = false);
    });
    \u0275\u0275element(1, "img", 34);
    \u0275\u0275elementStart(2, "div", 35)(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 37);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("highlighted", i_r16 === ctx_r2.selectedSuggestion);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r2.getSugImage(s_r15), \u0275\u0275sanitizeUrl)("alt", s_r15.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(7, 6, s_r15.price, "1.2-2"), "");
  }
}
function NavbarComponent_div_23_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, NavbarComponent_div_23_div_7_button_1_Template, 8, 9, "button", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.suggestions);
  }
}
function NavbarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "div", 65);
    \u0275\u0275element(2, "i", 66);
    \u0275\u0275elementStart(3, "input", 67);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function NavbarComponent_div_23_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInput($event));
    })("keydown", function NavbarComponent_div_23_Template_input_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onKeyDown($event));
    })("focus", function NavbarComponent_div_23_Template_input_focus_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileSearchFocused = true);
    })("blur", function NavbarComponent_div_23_Template_input_blur_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.mobileSearchFocused = false);
    })("keyup.enter", function NavbarComponent_div_23_Template_input_keyup_enter_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onSearch();
      return \u0275\u0275resetView(ctx_r2.searchOpen = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, NavbarComponent_div_23_button_4_Template, 2, 0, "button", 68);
    \u0275\u0275elementStart(5, "button", 69);
    \u0275\u0275listener("click", function NavbarComponent_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.onSearch();
      return \u0275\u0275resetView(ctx_r2.searchOpen = false);
    });
    \u0275\u0275element(6, "i", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, NavbarComponent_div_23_div_7_Template, 2, 1, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("focused", ctx_r2.mobileSearchFocused);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.searchQuery);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.suggestionsOpen && ctx_r2.suggestions.length);
  }
}
function NavbarComponent_div_24_ng_container_7_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 85);
    \u0275\u0275listener("click", function NavbarComponent_div_24_ng_container_7_a_10_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(1, "i", 63);
    \u0275\u0275text(2, " Admin");
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_24_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 80);
    \u0275\u0275listener("click", function NavbarComponent_div_24_ng_container_7_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(2, "i", 54);
    \u0275\u0275text(3, " Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 81);
    \u0275\u0275listener("click", function NavbarComponent_div_24_ng_container_7_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(5, "i", 56);
    \u0275\u0275text(6, " Wishlist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 82);
    \u0275\u0275listener("click", function NavbarComponent_div_24_ng_container_7_Template_a_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(8, "i", 52);
    \u0275\u0275text(9, " Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NavbarComponent_div_24_ng_container_7_a_10_Template, 3, 0, "a", 83);
    \u0275\u0275elementStart(11, "button", 84);
    \u0275\u0275listener("click", function NavbarComponent_div_24_ng_container_7_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275element(12, "i", 61);
    \u0275\u0275text(13, " Sign Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.isAdmin);
  }
}
function NavbarComponent_div_24_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "a", 86);
    \u0275\u0275listener("click", function NavbarComponent_div_24_ng_container_8_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275text(2, "Login");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 87);
    \u0275\u0275listener("click", function NavbarComponent_div_24_ng_container_8_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275text(4, "Sign Up");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function NavbarComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 75)(1, "a", 76);
    \u0275\u0275listener("click", function NavbarComponent_div_24_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(2, "i", 77);
    \u0275\u0275text(3, " All Games");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 78);
    \u0275\u0275listener("click", function NavbarComponent_div_24_Template_a_click_4_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeMobileMenu());
    });
    \u0275\u0275element(5, "i", 79);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, NavbarComponent_div_24_ng_container_7_Template, 14, 1, "ng-container", 12)(8, NavbarComponent_div_24_ng_container_8_Template, 5, 0, "ng-container", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Cart (", ctx_r2.cartCount, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoggedIn);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor(authService, cartService, productService, router, elRef) {
    this.authService = authService;
    this.cartService = cartService;
    this.productService = productService;
    this.router = router;
    this.elRef = elRef;
    this.searchQuery = "";
    this.menuOpen = false;
    this.mobileMenuOpen = false;
    this.searchOpen = false;
    this.searchFocused = false;
    this.mobileSearchFocused = false;
    this.cartCount = 0;
    this.isDarkMode = true;
    this.suggestions = [];
    this.suggestionsOpen = false;
    this.suggestionsLoading = false;
    this.selectedSuggestion = -1;
    this.search$ = new Subject();
    this.destroy$ = new Subject();
    this.apiBase = environment.apiUrl.replace("/api", "");
  }
  ngOnInit() {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      this.isDarkMode = false;
      document.body.classList.add("light-mode");
    } else {
      this.isDarkMode = true;
      document.body.classList.remove("light-mode");
    }
    this.cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items?.length || 0;
    });
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe((e) => {
      const url = e.urlAfterRedirects || "";
      if (url.startsWith("/products")) {
        const qs = url.split("?")[1] || "";
        const params = new URLSearchParams(qs);
        this.searchQuery = params.get("search") || "";
      }
    });
    this.search$.pipe(debounceTime(280), distinctUntilChanged(), takeUntil(this.destroy$), switchMap((query) => {
      if (query.trim().length < 2) {
        this.suggestions = [];
        this.suggestionsOpen = false;
        this.suggestionsLoading = false;
        return [];
      }
      this.suggestionsLoading = true;
      return this.productService.getProducts({ search: query, limit: 6 });
    })).subscribe({
      next: (res) => {
        this.suggestions = (res?.products || []).slice(0, 6);
        this.suggestionsOpen = this.suggestions.length > 0;
        this.suggestionsLoading = false;
        this.selectedSuggestion = -1;
      },
      error: () => {
        this.suggestionsLoading = false;
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onDocumentClick(event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.closeSuggestions();
    }
  }
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  get isAdmin() {
    return this.authService.isAdmin;
  }
  get userName() {
    return this.authService.currentUser?.name || "";
  }
  get userInitial() {
    return this.userName.charAt(0).toUpperCase();
  }
  get userAvatar() {
    const av = this.authService.currentUser?.avatar;
    if (!av)
      return "";
    if (av.startsWith("http"))
      return av;
    return `${this.apiBase}${av}`;
  }
  onAvatarError(event) {
    const img = event.target;
    img.style.display = "none";
    const initial = img.nextElementSibling;
    if (initial)
      initial.style.display = "flex";
  }
  onInput(value) {
    this.selectedSuggestion = -1;
    this.search$.next(value);
  }
  onFocus() {
    this.searchFocused = true;
    if (this.searchQuery.trim().length >= 2 && this.suggestions.length) {
      this.suggestionsOpen = true;
    }
  }
  onKeyDown(event) {
    if (!this.suggestionsOpen)
      return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      this.selectedSuggestion = Math.min(this.selectedSuggestion + 1, this.suggestions.length - 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      this.selectedSuggestion = Math.max(this.selectedSuggestion - 1, -1);
    } else if (event.key === "Escape") {
      this.closeSuggestions();
    } else if (event.key === "Enter" && this.selectedSuggestion >= 0) {
      event.preventDefault();
      this.pickSuggestion(this.suggestions[this.selectedSuggestion]);
    }
  }
  pickSuggestion(product) {
    this.searchQuery = product.name;
    this.closeSuggestions();
    this.router.navigate(["/products", product._id]);
  }
  onSearch() {
    if (this.searchQuery.trim()) {
      this.closeSuggestions();
      this.router.navigate(["/products"], { queryParams: { search: this.searchQuery.trim() } });
    }
  }
  clearSearch() {
    this.searchQuery = "";
    this.search$.next("");
    this.closeSuggestions();
  }
  closeSuggestions() {
    this.suggestionsOpen = false;
    this.searchFocused = false;
    this.selectedSuggestion = -1;
  }
  getSugImage(product) {
    if (!product.images?.length)
      return "";
    const img = product.images[0];
    if (img.startsWith("http"))
      return img;
    return `http://localhost:5000/uploads/${img}`;
  }
  goToProducts() {
    this.router.navigate(["/products"]);
  }
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    }
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen)
      this.searchOpen = false;
  }
  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
    if (this.searchOpen) {
      this.mobileMenuOpen = false;
    } else {
      this.closeSuggestions();
    }
  }
  logout() {
    this.authService.logout();
    this.cartService.clearLocalCart();
    this.closeMenu();
    this.closeMobileMenu();
    this.router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavbarComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(ProductService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function NavbarComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 25, vars: 23, consts: [["searchInput", ""], [1, "navbar"], [1, "navbar-container"], [1, "navbar-search", 3, "clickOutside"], [1, "fas", "fa-magnifying-glass", "search-icon"], ["type", "text", "placeholder", "Best Games...", "autocomplete", "off", 1, "search-input", 3, "ngModelChange", "keydown", "focus", "keyup.enter", "ngModel"], ["class", "search-spinner", 4, "ngIf"], ["class", "clear-btn", "title", "Clear search", "tabindex", "-1", 3, "click", 4, "ngIf"], ["title", "Filters", 1, "filter-btn", 3, "click"], [1, "fas", "fa-sliders"], ["class", "suggestions-drop", 4, "ngIf"], [1, "navbar-actions"], [4, "ngIf"], [1, "lang-tag"], [1, "fas", "fa-globe"], [1, "theme-toggle-btn", 3, "click", "title"], [1, "fas"], ["class", "user-menu", 4, "ngIf"], ["title", "Search", 1, "mobile-search-btn", 3, "click"], [1, "mobile-menu-btn", 3, "click"], [1, "fas", "fa-bars"], ["class", "mobile-search-row", 4, "ngIf"], ["class", "mobile-menu", 4, "ngIf"], [1, "search-spinner"], [1, "fas", "fa-circle-notch", "fa-spin"], ["title", "Clear search", "tabindex", "-1", 1, "clear-btn", 3, "click"], [1, "fas", "fa-xmark"], [1, "suggestions-drop"], [1, "suggestions-header"], [1, "fas", "fa-magnifying-glass"], ["class", "suggestion-item", 3, "highlighted", "mouseenter", "click", 4, "ngFor", "ngForOf"], [1, "sug-view-all", 3, "click"], [1, "fas", "fa-arrow-right"], [1, "suggestion-item", 3, "mouseenter", "click"], ["onerror", "this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'", 1, "sug-img", 3, "src", "alt"], [1, "sug-info"], [1, "sug-name"], [1, "sug-price"], ["class", "sug-cat", 4, "ngIf"], [1, "sug-cat"], ["routerLink", "/auth/login", 1, "btn-connect"], [1, "fas", "fa-user-plus"], [1, "user-menu"], [1, "user-btn", 3, "click"], [1, "avatar"], ["alt", "avatar", "class", "avatar-img", 3, "src", "error", 4, "ngIf"], [1, "avatar-initial"], ["class", "dropdown", 4, "ngIf"], ["alt", "avatar", 1, "avatar-img", 3, "error", "src"], [1, "dropdown"], [1, "dd-header"], ["routerLink", "/profile", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-user"], ["routerLink", "/orders", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-receipt"], ["routerLink", "/wishlist", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-heart"], ["class", "dd-divider", 4, "ngIf"], ["routerLink", "/admin", "class", "dropdown-item", 3, "click", 4, "ngIf"], [1, "dd-divider"], [1, "dropdown-item", "danger", 3, "click"], [1, "fas", "fa-right-from-bracket"], ["routerLink", "/admin", 1, "dropdown-item", 3, "click"], [1, "fas", "fa-gear"], [1, "mobile-search-row"], [1, "mobile-search-inner"], [1, "fas", "fa-magnifying-glass", "msr-icon"], ["type", "text", "placeholder", "Search games...", "autocomplete", "off", "autofocus", "", 1, "msr-input", 3, "ngModelChange", "keydown", "focus", "blur", "keyup.enter", "ngModel"], ["class", "msr-clear", "tabindex", "-1", 3, "click", 4, "ngIf"], [1, "msr-go", 3, "click"], ["class", "mobile-suggestions", 4, "ngIf"], ["tabindex", "-1", 1, "msr-clear", 3, "click"], [1, "mobile-suggestions"], ["class", "suggestion-item", 3, "highlighted", "click", 4, "ngFor", "ngForOf"], [1, "suggestion-item", 3, "click"], [1, "mobile-menu"], ["routerLink", "/products", 1, "mobile-nav-link", 3, "click"], [1, "fas", "fa-gamepad"], ["routerLink", "/cart", 1, "mobile-nav-link", 3, "click"], [1, "fas", "fa-cart-shopping"], ["routerLink", "/orders", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/wishlist", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/profile", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/admin", "class", "mobile-nav-link", 3, "click", 4, "ngIf"], [1, "mobile-nav-link", "danger", 3, "click"], ["routerLink", "/admin", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/auth/login", 1, "mobile-nav-link", 3, "click"], ["routerLink", "/auth/register", 1, "mobile-nav-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "nav", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275listener("clickOutside", function NavbarComponent_Template_div_clickOutside_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.closeSuggestions());
        });
        \u0275\u0275element(3, "i", 4);
        \u0275\u0275elementStart(4, "input", 5, 0);
        \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275listener("ngModelChange", function NavbarComponent_Template_input_ngModelChange_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onInput($event));
        })("keydown", function NavbarComponent_Template_input_keydown_4_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onKeyDown($event));
        })("focus", function NavbarComponent_Template_input_focus_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onFocus());
        })("keyup.enter", function NavbarComponent_Template_input_keyup_enter_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onSearch());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, NavbarComponent_span_6_Template, 2, 0, "span", 6)(7, NavbarComponent_button_7_Template, 2, 0, "button", 7);
        \u0275\u0275elementStart(8, "button", 8);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goToProducts());
        });
        \u0275\u0275element(9, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, NavbarComponent_div_10_Template, 8, 2, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 11);
        \u0275\u0275template(12, NavbarComponent_ng_container_12_Template, 4, 0, "ng-container", 12);
        \u0275\u0275elementStart(13, "span", 13);
        \u0275\u0275element(14, "i", 14);
        \u0275\u0275text(15, " Eng");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "button", 15);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleTheme());
        });
        \u0275\u0275element(17, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(18, NavbarComponent_div_18_Template, 7, 5, "div", 17);
        \u0275\u0275elementStart(19, "button", 18);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSearch());
        });
        \u0275\u0275element(20, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 19);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_21_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleMobileMenu());
        });
        \u0275\u0275element(22, "i", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(23, NavbarComponent_div_23_Template, 8, 5, "div", 21)(24, NavbarComponent_div_24_Template, 9, 3, "div", 22);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("focused", ctx.searchFocused);
        \u0275\u0275advance();
        \u0275\u0275classProp("icon-active", ctx.searchFocused);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.suggestionsLoading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchQuery && !ctx.suggestionsLoading);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.suggestionsOpen && ctx.suggestions.length);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", !ctx.isLoggedIn);
        \u0275\u0275advance(4);
        \u0275\u0275property("title", ctx.isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode");
        \u0275\u0275advance();
        \u0275\u0275classProp("fa-sun", ctx.isDarkMode)("fa-moon", !ctx.isDarkMode);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.isLoggedIn);
        \u0275\u0275advance();
        \u0275\u0275classProp("active", ctx.searchOpen);
        \u0275\u0275advance();
        \u0275\u0275classProp("fa-magnifying-glass", !ctx.searchOpen)("fa-xmark", ctx.searchOpen);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.searchOpen);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mobileMenuOpen);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, RouterModule, RouterLink, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ['@charset "UTF-8";\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  background: #161929;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  animation: _ngcontent-%COMP%_navbarIn 0.4s ease both;\n}\n@keyframes _ngcontent-%COMP%_navbarIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.navbar-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.navbar-search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 360px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  padding: 0 14px;\n  position: relative;\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    background 0.25s;\n}\n.navbar-search.focused[_ngcontent-%COMP%] {\n  border-color: rgba(79, 110, 247, 0.6);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15), 0 4px 20px rgba(79, 110, 247, 0.15);\n  background: rgba(79, 110, 247, 0.05);\n}\n.search-icon[_ngcontent-%COMP%] {\n  color: #5a5e7a;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n  transition: color 0.25s;\n}\n.search-icon.icon-active[_ngcontent-%COMP%] {\n  color: #818cf8;\n}\n.filter-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.mobile-menu-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 16px;\n  text-align: center;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  color: #e0e4ff;\n  font-size: 0.88rem;\n  padding: 10px 0;\n  outline: none;\n  min-width: 0;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #5a5e7a;\n}\n.clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  padding: 4px 2px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  transition: color 0.2s, transform 0.2s;\n  flex-shrink: 0;\n}\n.clear-btn[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  transform: scale(1.2) rotate(90deg);\n}\n.search-spinner[_ngcontent-%COMP%] {\n  color: #818cf8;\n  font-size: 0.78rem;\n  flex-shrink: 0;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  padding: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n  flex-shrink: 0;\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  color: #a0a4c0;\n}\n.suggestions-drop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: 0;\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);\n  z-index: 600;\n  animation: _ngcontent-%COMP%_dropdownIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.suggestions-header[_ngcontent-%COMP%] {\n  padding: 10px 16px 8px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #5a5e7a;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.suggestions-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.suggestion-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.suggestion-item.highlighted[_ngcontent-%COMP%], \n.suggestion-item[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.08);\n}\n.sug-img[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.sug-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.sug-name[_ngcontent-%COMP%] {\n  display: block;\n  color: #e0e4ff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sug-price[_ngcontent-%COMP%] {\n  display: block;\n  color: #818cf8;\n  font-size: 0.78rem;\n  margin-top: 1px;\n}\n.sug-cat[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #5a5e7a;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 50px;\n  padding: 2px 9px;\n}\n.sug-view-all[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  color: #4f6ef7;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.sug-view-all[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.08);\n  color: #818cf8;\n}\n.navbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.btn-connect[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: white;\n  border-radius: 50px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s;\n  box-shadow: 0 4px 15px rgba(79, 110, 247, 0.35);\n}\n.btn-connect[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.lang-tag[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  font-size: 0.8rem;\n  color: #a0a4c0;\n  white-space: nowrap;\n}\n.user-menu[_ngcontent-%COMP%] {\n  position: relative;\n}\n.user-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.avatar-initial[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 12px);\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\n  min-width: 200px;\n  padding: 8px;\n  z-index: 500;\n  animation: _ngcontent-%COMP%_dropdownIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_dropdownIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dd-header[_ngcontent-%COMP%] {\n  padding: 8px 14px 12px;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.92rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  margin-bottom: 6px;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  color: #a0a4c0;\n  font-size: 0.88rem;\n  border-radius: 9px;\n  text-decoration: none;\n  transition: all 0.18s;\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n}\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.dropdown-item.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.dropdown-item.danger[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.dd-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 6px 0;\n}\n.theme-toggle-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  color: #a0a4c0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  transition:\n    background 0.25s,\n    color 0.25s,\n    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.25s;\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(251, 191, 36, 0.12);\n  border-color: rgba(251, 191, 36, 0.35);\n  color: #fbbf24;\n  transform: rotate(20deg) scale(1.1);\n  box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.12);\n}\n.theme-toggle-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.theme-toggle-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: rotate(30deg);\n}\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  color: #a0a4c0;\n  padding: 6px;\n  cursor: pointer;\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  background: #161929;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding: 12px 20px;\n  animation: _ngcontent-%COMP%_mobileMenuIn 0.3s ease both;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_mobileMenuIn {\n  from {\n    opacity: 0;\n    transform: translateY(-12px);\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    max-height: 600px;\n  }\n}\n.mobile-search[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.mobile-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  padding: 10px 16px;\n  color: #e0e4ff;\n  font-size: 0.88rem;\n  outline: none;\n}\n.mobile-nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 12px 4px;\n  color: #a0a4c0;\n  text-decoration: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  font-weight: 500;\n  font-size: 0.95rem;\n  background: none;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.mobile-nav-link[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.mobile-nav-link.danger[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n@media (max-width: 900px) {\n  .lang-tag[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.mobile-search-row[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(22, 25, 41, 0.98) 0%,\n      rgba(20, 22, 38, 0.98) 100%);\n  border-top: 1px solid rgba(79, 110, 247, 0.18);\n  padding: 12px 16px;\n  overflow: hidden;\n  animation: _ngcontent-%COMP%_msrSlideDown 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n}\n@keyframes _ngcontent-%COMP%_msrSlideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    max-height: 80px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    transform: translateY(0);\n  }\n}\n.mobile-search-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px solid rgba(79, 110, 247, 0.4);\n  border-radius: 50px;\n  padding: 0 14px;\n  box-shadow: 0 0 0 0 rgba(79, 110, 247, 0.25);\n  animation: _ngcontent-%COMP%_msrGlowIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.mobile-search-inner[_ngcontent-%COMP%]:focus-within {\n  border-color: rgba(79, 110, 247, 0.75);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18), 0 4px 20px rgba(79, 110, 247, 0.2);\n}\n@keyframes _ngcontent-%COMP%_msrGlowIn {\n  0% {\n    opacity: 0;\n    transform: scaleX(0.88);\n    box-shadow: 0 0 0 0 rgba(79, 110, 247, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scaleX(1.02);\n  }\n  100% {\n    transform: scaleX(1);\n    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.12);\n  }\n}\n.msr-icon[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  animation: _ngcontent-%COMP%_msrIconBounce 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;\n}\n@keyframes _ngcontent-%COMP%_msrIconBounce {\n  from {\n    opacity: 0;\n    transform: scale(0.4) rotate(-20deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n.msr-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  color: #e0e4ff;\n  font-size: 0.9rem;\n  padding: 11px 0;\n  outline: none;\n  animation: _ngcontent-%COMP%_msrTextIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;\n}\n@keyframes _ngcontent-%COMP%_msrTextIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.msr-input[_ngcontent-%COMP%]::placeholder {\n  color: #5a5e7a;\n}\n.msr-clear[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  padding: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n  transition: color 0.2s, transform 0.2s;\n}\n.msr-clear[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n  transform: rotate(90deg) scale(1.2);\n}\n.msr-go[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  color: #fff;\n  font-size: 0.82rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 3px 10px rgba(79, 110, 247, 0.45);\n  animation: _ngcontent-%COMP%_msrBtnPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.28s both;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s;\n}\n@keyframes _ngcontent-%COMP%_msrBtnPop {\n  from {\n    opacity: 0;\n    transform: scale(0) rotate(-90deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n.msr-go[_ngcontent-%COMP%]:hover {\n  transform: scale(1.15) rotate(15deg);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.65);\n}\n.msr-go[_ngcontent-%COMP%]:active {\n  transform: scale(0.92);\n}\n.mobile-suggestions[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border-top: 1px solid rgba(79, 110, 247, 0.15);\n  max-height: 280px;\n  overflow-y: auto;\n}\n.mobile-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.mobile-suggestions[_ngcontent-%COMP%]   .suggestion-item[_ngcontent-%COMP%]:hover, \n.mobile-suggestions[_ngcontent-%COMP%]   .suggestion-item.highlighted[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.08);\n}\n.mobile-search-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 768px) {\n  .navbar-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-search-btn[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: rgba(255, 255, 255, 0.05);\n    border: 1px solid rgba(255, 255, 255, 0.09);\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    color: #a0a4c0;\n    cursor: pointer;\n    font-size: 0.95rem;\n    transition:\n      background 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),\n      border-color 0.22s,\n      color 0.22s,\n      transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),\n      box-shadow 0.22s;\n  }\n  .mobile-search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  }\n  .mobile-search-btn[_ngcontent-%COMP%]:hover {\n    background: rgba(79, 110, 247, 0.1);\n    border-color: rgba(79, 110, 247, 0.35);\n    color: #818cf8;\n    transform: scale(1.08);\n  }\n  .mobile-search-btn.active[_ngcontent-%COMP%] {\n    background: rgba(79, 110, 247, 0.18);\n    border-color: rgba(79, 110, 247, 0.5);\n    color: #4f6ef7;\n    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n    transform: scale(1.05);\n  }\n  .mobile-search-btn.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    transform: rotate(90deg) scale(1.1);\n  }\n  .btn-connect[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: `
    <nav class="navbar">
      <div class="navbar-container">

        <!-- Search -->
        <div class="navbar-search" [class.focused]="searchFocused" (clickOutside)="closeSuggestions()">
          <i class="fas fa-magnifying-glass search-icon" [class.icon-active]="searchFocused"></i>
          <input #searchInput
            type="text"
            [(ngModel)]="searchQuery"
            (ngModelChange)="onInput($event)"
            (keydown)="onKeyDown($event)"
            (focus)="onFocus()"
            (keyup.enter)="onSearch()"
            placeholder="Best Games..."
            class="search-input"
            autocomplete="off" />
          <!-- Loading spinner -->
          <span class="search-spinner" *ngIf="suggestionsLoading">
            <i class="fas fa-circle-notch fa-spin"></i>
          </span>
          <!-- Clear button -->
          <button class="clear-btn" *ngIf="searchQuery && !suggestionsLoading"
            (click)="clearSearch()" title="Clear search" tabindex="-1">
            <i class="fas fa-xmark"></i>
          </button>
          <button class="filter-btn" title="Filters" (click)="goToProducts()">
            <i class="fas fa-sliders"></i>
          </button>

          <!-- Suggestions dropdown -->
          <div class="suggestions-drop" *ngIf="suggestionsOpen && suggestions.length">
            <div class="suggestions-header">
              <i class="fas fa-magnifying-glass"></i> Results for "{{ searchQuery }}"
            </div>
            <button class="suggestion-item"
              *ngFor="let s of suggestions; let i = index"
              [class.highlighted]="i === selectedSuggestion"
              (mouseenter)="selectedSuggestion = i"
              (click)="pickSuggestion(s)">
              <img class="sug-img" [src]="getSugImage(s)"
                onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" [alt]="s.name" />
              <div class="sug-info">
                <span class="sug-name">{{ s.name }}</span>
                <span class="sug-price">\${{ s.price | number:'1.2-2' }}</span>
              </div>
              <span class="sug-cat" *ngIf="s.category">{{ $any(s.category)?.name || s.category }}</span>
            </button>
            <button class="sug-view-all" (click)="onSearch()">
              <i class="fas fa-arrow-right"></i> View all results
            </button>
          </div>
        </div>

        <!-- Right actions -->
        <div class="navbar-actions">
          <!-- Connect / Login -->
          <ng-container *ngIf="!isLoggedIn">
            <a routerLink="/auth/login" class="btn-connect"><i class="fas fa-user-plus"></i> Connect</a>
          </ng-container>

          <!-- Lang tag -->
          <span class="lang-tag"><i class="fas fa-globe"></i> Eng</span>

          <!-- Theme toggle -->
          <button class="theme-toggle-btn" (click)="toggleTheme()"
            [title]="isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'">
            <i class="fas" [class.fa-sun]="isDarkMode" [class.fa-moon]="!isDarkMode"></i>
          </button>

          <!-- User menu -->
          <div class="user-menu" *ngIf="isLoggedIn">
            <button class="user-btn" (click)="toggleMenu()">
              <span class="avatar">
                <img *ngIf="userAvatar" [src]="userAvatar" alt="avatar" class="avatar-img"
                  (error)="onAvatarError($event)" />
                <span class="avatar-initial" [style.display]="userAvatar ? 'none' : 'flex'">{{ userInitial }}</span>
              </span>
            </button>
            <div class="dropdown" *ngIf="menuOpen">
              <div class="dd-header">{{ userName }}</div>
              <a routerLink="/profile" class="dropdown-item" (click)="closeMenu()">
                <i class="fas fa-user"></i>
                Profile
              </a>
              <a routerLink="/orders" class="dropdown-item" (click)="closeMenu()">
                <i class="fas fa-receipt"></i>
                Orders
              </a>
              <a routerLink="/wishlist" class="dropdown-item" (click)="closeMenu()">
                <i class="fas fa-heart"></i>
                Wishlist
              </a>
              <div class="dd-divider" *ngIf="isAdmin"></div>
              <a routerLink="/admin" class="dropdown-item" *ngIf="isAdmin" (click)="closeMenu()">
                <i class="fas fa-gear"></i>
                Admin
              </a>
              <div class="dd-divider"></div>
              <button class="dropdown-item danger" (click)="logout()">
                <i class="fas fa-right-from-bracket"></i>
                Sign Out
              </button>
            </div>
          </div>

          <!-- Mobile search toggle (mobile only) -->
          <button class="mobile-search-btn" [class.active]="searchOpen" (click)="toggleSearch()" title="Search">
            <i class="fas" [class.fa-magnifying-glass]="!searchOpen" [class.fa-xmark]="searchOpen"></i>
          </button>

          <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>

      <!-- Mobile search bar row -->
      <div class="mobile-search-row" *ngIf="searchOpen">
        <div class="mobile-search-inner" [class.focused]="mobileSearchFocused">
          <i class="fas fa-magnifying-glass msr-icon"></i>
          <input type="text" [(ngModel)]="searchQuery"
            (ngModelChange)="onInput($event)"
            (keydown)="onKeyDown($event)"
            (focus)="mobileSearchFocused = true"
            (blur)="mobileSearchFocused = false"
            (keyup.enter)="onSearch(); searchOpen = false"
            placeholder="Search games..." class="msr-input"
            autocomplete="off"
            autofocus />
          <button class="msr-clear" *ngIf="searchQuery" (click)="clearSearch()" tabindex="-1">
            <i class="fas fa-xmark"></i>
          </button>
          <button class="msr-go" (click)="onSearch(); searchOpen = false">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <!-- Mobile suggestions -->
        <div class="mobile-suggestions" *ngIf="suggestionsOpen && suggestions.length">
          <button class="suggestion-item"
            *ngFor="let s of suggestions; let i = index"
            [class.highlighted]="i === selectedSuggestion"
            (click)="pickSuggestion(s); searchOpen = false">
            <img class="sug-img" [src]="getSugImage(s)"
              onerror="this.src='https://placehold.co/40x40/1e2235/4f6ef7?text=G'" [alt]="s.name" />
            <div class="sug-info">
              <span class="sug-name">{{ s.name }}</span>
              <span class="sug-price">\${{ s.price | number:'1.2-2' }}</span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile drawer -->
      <div class="mobile-menu" *ngIf="mobileMenuOpen">
        <a routerLink="/products" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-gamepad"></i> All Games</a>
        <a routerLink="/cart" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-cart-shopping"></i> Cart ({{ cartCount }})</a>
        <ng-container *ngIf="isLoggedIn">
          <a routerLink="/orders" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-receipt"></i> Orders</a>
          <a routerLink="/wishlist" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-heart"></i> Wishlist</a>
          <a routerLink="/profile" class="mobile-nav-link" (click)="closeMobileMenu()"><i class="fas fa-user"></i> Profile</a>
          <a routerLink="/admin" class="mobile-nav-link" *ngIf="isAdmin" (click)="closeMobileMenu()"><i class="fas fa-gear"></i> Admin</a>
          <button class="mobile-nav-link danger" (click)="logout()"><i class="fas fa-right-from-bracket"></i> Sign Out</button>
        </ng-container>
        <ng-container *ngIf="!isLoggedIn">
          <a routerLink="/auth/login" class="mobile-nav-link" (click)="closeMobileMenu()">Login</a>
          <a routerLink="/auth/register" class="mobile-nav-link" (click)="closeMobileMenu()">Sign Up</a>
        </ng-container>
      </div>
    </nav>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;648d4c5cbf1320569342eafc4da4a1714f31dcedff63769f538bdb3c4b6a0103;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/navbar/navbar.component.ts */\n.navbar {\n  background: #161929;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  animation: navbarIn 0.4s ease both;\n}\n@keyframes navbarIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.navbar-container {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 68px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n.navbar-search {\n  flex: 1;\n  max-width: 360px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  padding: 0 14px;\n  position: relative;\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    background 0.25s;\n}\n.navbar-search.focused {\n  border-color: rgba(79, 110, 247, 0.6);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15), 0 4px 20px rgba(79, 110, 247, 0.15);\n  background: rgba(79, 110, 247, 0.05);\n}\n.search-icon {\n  color: #5a5e7a;\n  flex-shrink: 0;\n  font-size: 0.9rem;\n  transition: color 0.25s;\n}\n.search-icon.icon-active {\n  color: #818cf8;\n}\n.filter-btn i {\n  font-size: 0.9rem;\n}\n.mobile-menu-btn i {\n  font-size: 1.15rem;\n}\n.dropdown-item i {\n  font-size: 0.85rem;\n  width: 16px;\n  text-align: center;\n}\n.search-input {\n  flex: 1;\n  background: none;\n  border: none;\n  color: #e0e4ff;\n  font-size: 0.88rem;\n  padding: 10px 0;\n  outline: none;\n  min-width: 0;\n}\n.search-input::placeholder {\n  color: #5a5e7a;\n}\n.clear-btn {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  padding: 4px 2px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.8rem;\n  transition: color 0.2s, transform 0.2s;\n  flex-shrink: 0;\n}\n.clear-btn:hover {\n  color: #ef4444;\n  transform: scale(1.2) rotate(90deg);\n}\n.search-spinner {\n  color: #818cf8;\n  font-size: 0.78rem;\n  flex-shrink: 0;\n}\n.filter-btn {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  padding: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n  flex-shrink: 0;\n}\n.filter-btn:hover {\n  color: #a0a4c0;\n}\n.suggestions-drop {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 0;\n  right: 0;\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);\n  z-index: 600;\n  animation: dropdownIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n.suggestions-header {\n  padding: 10px 16px 8px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: #5a5e7a;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.suggestions-header i {\n  color: #4f6ef7;\n}\n.suggestion-item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.suggestion-item.highlighted,\n.suggestion-item:hover {\n  background: rgba(79, 110, 247, 0.08);\n}\n.sug-img {\n  width: 38px;\n  height: 38px;\n  border-radius: 8px;\n  object-fit: cover;\n  flex-shrink: 0;\n}\n.sug-info {\n  flex: 1;\n  min-width: 0;\n}\n.sug-name {\n  display: block;\n  color: #e0e4ff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.sug-price {\n  display: block;\n  color: #818cf8;\n  font-size: 0.78rem;\n  margin-top: 1px;\n}\n.sug-cat {\n  flex-shrink: 0;\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: #5a5e7a;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.07);\n  border-radius: 50px;\n  padding: 2px 9px;\n}\n.sug-view-all {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  color: #4f6ef7;\n  font-size: 0.82rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.sug-view-all:hover {\n  background: rgba(79, 110, 247, 0.08);\n  color: #818cf8;\n}\n.navbar-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-left: auto;\n}\n.btn-connect {\n  padding: 8px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: white;\n  border-radius: 50px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s;\n  box-shadow: 0 4px 15px rgba(79, 110, 247, 0.35);\n}\n.btn-connect:hover {\n  opacity: 0.88;\n}\n.lang-tag {\n  padding: 7px 14px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  font-size: 0.8rem;\n  color: #a0a4c0;\n  white-space: nowrap;\n}\n.user-menu {\n  position: relative;\n}\n.user-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n}\n.avatar {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.9rem;\n  overflow: hidden;\n  position: relative;\n}\n.avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.avatar-initial {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dropdown {\n  position: absolute;\n  right: 0;\n  top: calc(100% + 12px);\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);\n  min-width: 200px;\n  padding: 8px;\n  z-index: 500;\n  animation: dropdownIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes dropdownIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dd-header {\n  padding: 8px 14px 12px;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.92rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.07);\n  margin-bottom: 6px;\n}\n.dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  color: #a0a4c0;\n  font-size: 0.88rem;\n  border-radius: 9px;\n  text-decoration: none;\n  transition: all 0.18s;\n  background: none;\n  border: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n}\n.dropdown-item:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: #fff;\n}\n.dropdown-item.danger {\n  color: #ef4444;\n}\n.dropdown-item.danger:hover {\n  background: rgba(239, 68, 68, 0.1);\n}\n.dd-divider {\n  height: 1px;\n  background: rgba(255, 255, 255, 0.07);\n  margin: 6px 0;\n}\n.theme-toggle-btn {\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  color: #a0a4c0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  transition:\n    background 0.25s,\n    color 0.25s,\n    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),\n    box-shadow 0.25s;\n}\n.theme-toggle-btn:hover {\n  background: rgba(251, 191, 36, 0.12);\n  border-color: rgba(251, 191, 36, 0.35);\n  color: #fbbf24;\n  transform: rotate(20deg) scale(1.1);\n  box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.12);\n}\n.theme-toggle-btn i {\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.theme-toggle-btn:hover i {\n  transform: rotate(30deg);\n}\n.mobile-menu-btn {\n  display: none;\n  background: none;\n  border: none;\n  color: #a0a4c0;\n  padding: 6px;\n  cursor: pointer;\n}\n.mobile-menu {\n  background: #161929;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  padding: 12px 20px;\n  animation: mobileMenuIn 0.3s ease both;\n  overflow: hidden;\n}\n@keyframes mobileMenuIn {\n  from {\n    opacity: 0;\n    transform: translateY(-12px);\n    max-height: 0;\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n    max-height: 600px;\n  }\n}\n.mobile-search {\n  margin-bottom: 12px;\n}\n.mobile-search .search-input {\n  width: 100%;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1px solid rgba(255, 255, 255, 0.09);\n  border-radius: 50px;\n  padding: 10px 16px;\n  color: #e0e4ff;\n  font-size: 0.88rem;\n  outline: none;\n}\n.mobile-nav-link {\n  display: block;\n  padding: 12px 4px;\n  color: #a0a4c0;\n  text-decoration: none;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  font-weight: 500;\n  font-size: 0.95rem;\n  background: none;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  width: 100%;\n  text-align: left;\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.mobile-nav-link:hover {\n  color: #fff;\n}\n.mobile-nav-link.danger {\n  color: #ef4444;\n}\n@media (max-width: 900px) {\n  .lang-tag {\n    display: none;\n  }\n}\n.mobile-search-row {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(22, 25, 41, 0.98) 0%,\n      rgba(20, 22, 38, 0.98) 100%);\n  border-top: 1px solid rgba(79, 110, 247, 0.18);\n  padding: 12px 16px;\n  overflow: hidden;\n  animation: msrSlideDown 0.38s cubic-bezier(0.16, 1, 0.3, 1) both;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);\n}\n@keyframes msrSlideDown {\n  from {\n    opacity: 0;\n    max-height: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    max-height: 80px;\n    padding-top: 12px;\n    padding-bottom: 12px;\n    transform: translateY(0);\n  }\n}\n.mobile-search-inner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: rgba(255, 255, 255, 0.05);\n  border: 1.5px solid rgba(79, 110, 247, 0.4);\n  border-radius: 50px;\n  padding: 0 14px;\n  box-shadow: 0 0 0 0 rgba(79, 110, 247, 0.25);\n  animation: msrGlowIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) 0.12s both;\n  transition: border-color 0.25s, box-shadow 0.25s;\n}\n.mobile-search-inner:focus-within {\n  border-color: rgba(79, 110, 247, 0.75);\n  box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.18), 0 4px 20px rgba(79, 110, 247, 0.2);\n}\n@keyframes msrGlowIn {\n  0% {\n    opacity: 0;\n    transform: scaleX(0.88);\n    box-shadow: 0 0 0 0 rgba(79, 110, 247, 0);\n  }\n  60% {\n    opacity: 1;\n    transform: scaleX(1.02);\n  }\n  100% {\n    transform: scaleX(1);\n    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.12);\n  }\n}\n.msr-icon {\n  color: #4f6ef7;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  animation: msrIconBounce 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;\n}\n@keyframes msrIconBounce {\n  from {\n    opacity: 0;\n    transform: scale(0.4) rotate(-20deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n.msr-input {\n  flex: 1;\n  background: none;\n  border: none;\n  color: #e0e4ff;\n  font-size: 0.9rem;\n  padding: 11px 0;\n  outline: none;\n  animation: msrTextIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.22s both;\n}\n@keyframes msrTextIn {\n  from {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.msr-input::placeholder {\n  color: #5a5e7a;\n}\n.msr-clear {\n  background: none;\n  border: none;\n  color: #5a5e7a;\n  padding: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  font-size: 0.82rem;\n  flex-shrink: 0;\n  transition: color 0.2s, transform 0.2s;\n}\n.msr-clear:hover {\n  color: #ef4444;\n  transform: rotate(90deg) scale(1.2);\n}\n.msr-go {\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border: none;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n  color: #fff;\n  font-size: 0.82rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 3px 10px rgba(79, 110, 247, 0.45);\n  animation: msrBtnPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.28s both;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s;\n}\n@keyframes msrBtnPop {\n  from {\n    opacity: 0;\n    transform: scale(0) rotate(-90deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) rotate(0deg);\n  }\n}\n.msr-go:hover {\n  transform: scale(1.15) rotate(15deg);\n  box-shadow: 0 6px 20px rgba(79, 110, 247, 0.65);\n}\n.msr-go:active {\n  transform: scale(0.92);\n}\n.mobile-suggestions {\n  background: #1e2235;\n  border-top: 1px solid rgba(79, 110, 247, 0.15);\n  max-height: 280px;\n  overflow-y: auto;\n}\n.mobile-suggestions .suggestion-item {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.mobile-suggestions .suggestion-item:hover,\n.mobile-suggestions .suggestion-item.highlighted {\n  background: rgba(79, 110, 247, 0.08);\n}\n.mobile-search-btn {\n  display: none;\n}\n@media (max-width: 768px) {\n  .navbar-search {\n    display: none;\n  }\n  .mobile-menu-btn {\n    display: flex;\n  }\n  .mobile-search-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: rgba(255, 255, 255, 0.05);\n    border: 1px solid rgba(255, 255, 255, 0.09);\n    border-radius: 50%;\n    width: 36px;\n    height: 36px;\n    color: #a0a4c0;\n    cursor: pointer;\n    font-size: 0.95rem;\n    transition:\n      background 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),\n      border-color 0.22s,\n      color 0.22s,\n      transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1),\n      box-shadow 0.22s;\n  }\n  .mobile-search-btn i {\n    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  }\n  .mobile-search-btn:hover {\n    background: rgba(79, 110, 247, 0.1);\n    border-color: rgba(79, 110, 247, 0.35);\n    color: #818cf8;\n    transform: scale(1.08);\n  }\n  .mobile-search-btn.active {\n    background: rgba(79, 110, 247, 0.18);\n    border-color: rgba(79, 110, 247, 0.5);\n    color: #4f6ef7;\n    box-shadow: 0 0 0 3px rgba(79, 110, 247, 0.15);\n    transform: scale(1.05);\n  }\n  .mobile-search-btn.active i {\n    transform: rotate(90deg) scale(1.1);\n  }\n  .btn-connect {\n    display: none;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: CartService }, { type: ProductService }, { type: Router }, { type: ElementRef }], { onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/shared/components/navbar/navbar.component.ts", lineNumber: 556 });
})();

// src/app/shared/components/message/message-host.component.ts
function MessageHostComponent_div_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 10);
  }
}
function MessageHostComponent_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 11);
  }
}
function MessageHostComponent_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 12);
  }
}
function MessageHostComponent_div_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 13);
  }
}
function MessageHostComponent_div_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function MessageHostComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function MessageHostComponent_div_1_Template_div_click_0_listener() {
      const m_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(m_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275template(2, MessageHostComponent_div_1_i_2_Template, 1, 0, "i", 4)(3, MessageHostComponent_div_1_i_3_Template, 1, 0, "i", 5)(4, MessageHostComponent_div_1_i_4_Template, 1, 0, "i", 6)(5, MessageHostComponent_div_1_i_5_Template, 1, 0, "i", 7)(6, MessageHostComponent_div_1_i_6_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("msg-item msg-", m_r2.type, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", m_r2.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.type === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r2.type === "loading");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r2.text);
  }
}
var MessageHostComponent = class _MessageHostComponent {
  constructor(msgService) {
    this.msgService = msgService;
    this.messages = [];
  }
  ngOnInit() {
    this.sub = this.msgService.messages$.subscribe((m) => this.messages = m);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  dismiss(id) {
    this.msgService.dismiss(id);
  }
  trackById(_, m) {
    return m.id;
  }
  static {
    this.\u0275fac = function MessageHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessageHostComponent)(\u0275\u0275directiveInject(MessageService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessageHostComponent, selectors: [["app-message-host"]], decls: 2, vars: 2, consts: [[1, "msg-container"], [3, "class", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "click"], [1, "msg-icon"], ["class", "fas fa-circle-check", 4, "ngIf"], ["class", "fas fa-circle-xmark", 4, "ngIf"], ["class", "fas fa-triangle-exclamation", 4, "ngIf"], ["class", "fas fa-circle-info", 4, "ngIf"], ["class", "fas fa-circle-notch msg-spin", 4, "ngIf"], [1, "msg-text"], [1, "fas", "fa-circle-check"], [1, "fas", "fa-circle-xmark"], [1, "fas", "fa-triangle-exclamation"], [1, "fas", "fa-circle-info"], [1, "fas", "fa-circle-notch", "msg-spin"]], template: function MessageHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, MessageHostComponent_div_1_Template, 9, 9, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.messages)("ngForTrackBy", ctx.trackById);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.msg-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  pointer-events: none;\n}\n.msg-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 20px;\n  border-radius: 100px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  pointer-events: all;\n  cursor: pointer;\n  animation: _ngcontent-%COMP%_msgSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;\n  backdrop-filter: blur(12px);\n  border: 1px solid transparent;\n  white-space: nowrap;\n}\n@keyframes _ngcontent-%COMP%_msgSlideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-14px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.msg-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\n.msg-text[_ngcontent-%COMP%] {\n  line-height: 1.4;\n}\n.msg-success[_ngcontent-%COMP%] {\n  background: rgba(22, 197, 94, 0.15);\n  color: #22c55e;\n  border-color: rgba(22, 197, 94, 0.3);\n}\n.msg-error[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.msg-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.3);\n}\n.msg-info[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n  border-color: rgba(79, 110, 247, 0.3);\n}\n.msg-loading[_ngcontent-%COMP%] {\n  background: rgba(160, 164, 192, 0.12);\n  color: #a0a4c0;\n  border-color: rgba(160, 164, 192, 0.2);\n}\n.msg-spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=message-host.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageHostComponent, [{
    type: Component,
    args: [{ selector: "app-message-host", standalone: true, imports: [CommonModule], template: `
    <div class="msg-container">
      <div
        *ngFor="let m of messages; trackBy: trackById"
        class="msg-item msg-{{ m.type }}"
        (click)="dismiss(m.id)"
      >
        <span class="msg-icon">
          <i *ngIf="m.type==='success'" class="fas fa-circle-check"></i>
          <i *ngIf="m.type==='error'"   class="fas fa-circle-xmark"></i>
          <i *ngIf="m.type==='warning'" class="fas fa-triangle-exclamation"></i>
          <i *ngIf="m.type==='info'"    class="fas fa-circle-info"></i>
          <i *ngIf="m.type==='loading'" class="fas fa-circle-notch msg-spin"></i>
        </span>
        <span class="msg-text">{{ m.text }}</span>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;341eede9da63cf8aa226e8e830b904c0d8f7eeb6927e839608f22a7748c23f81;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/message/message-host.component.ts */\n.msg-container {\n  position: fixed;\n  top: 20px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 2000;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  pointer-events: none;\n}\n.msg-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 20px;\n  border-radius: 100px;\n  font-size: 0.9rem;\n  font-weight: 500;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  pointer-events: all;\n  cursor: pointer;\n  animation: msgSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;\n  backdrop-filter: blur(12px);\n  border: 1px solid transparent;\n  white-space: nowrap;\n}\n@keyframes msgSlideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-14px) scale(0.9);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.msg-icon {\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n}\n.msg-text {\n  line-height: 1.4;\n}\n.msg-success {\n  background: rgba(22, 197, 94, 0.15);\n  color: #22c55e;\n  border-color: rgba(22, 197, 94, 0.3);\n}\n.msg-error {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n  border-color: rgba(239, 68, 68, 0.3);\n}\n.msg-warning {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n  border-color: rgba(245, 158, 11, 0.3);\n}\n.msg-info {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n  border-color: rgba(79, 110, 247, 0.3);\n}\n.msg-loading {\n  background: rgba(160, 164, 192, 0.12);\n  color: #a0a4c0;\n  border-color: rgba(160, 164, 192, 0.2);\n}\n.msg-spin {\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=message-host.component.css.map */\n"] }]
  }], () => [{ type: MessageService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessageHostComponent, { className: "MessageHostComponent", filePath: "src/app/shared/components/message/message-host.component.ts", lineNumber: 64 });
})();

// src/app/shared/components/notification/notification-host.component.ts
function NotificationHostComponent_div_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 14);
  }
}
function NotificationHostComponent_div_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 15);
  }
}
function NotificationHostComponent_div_1_i_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function NotificationHostComponent_div_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 17);
  }
}
function NotificationHostComponent_div_1_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r2.description);
  }
}
function NotificationHostComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 2)(2, "span", 3);
    \u0275\u0275template(3, NotificationHostComponent_div_1_i_3_Template, 1, 0, "i", 4)(4, NotificationHostComponent_div_1_i_4_Template, 1, 0, "i", 5)(5, NotificationHostComponent_div_1_i_5_Template, 1, 0, "i", 6)(6, NotificationHostComponent_div_1_i_6_Template, 1, 0, "i", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "p", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, NotificationHostComponent_div_1_p_10_Template, 2, 1, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 11);
    \u0275\u0275listener("click", function NotificationHostComponent_div_1_Template_button_click_11_listener() {
      const n_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dismiss(n_r2.id));
    });
    \u0275\u0275element(12, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const n_r2 = ctx.$implicit;
    \u0275\u0275classMapInterpolate1("notif-card notif-", n_r2.type, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", n_r2.type === "success");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r2.type === "error");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r2.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r2.type === "info");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r2.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", n_r2.description);
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("animation-duration", n_r2.duration + "ms");
  }
}
var NotificationHostComponent = class _NotificationHostComponent {
  constructor(notifService) {
    this.notifService = notifService;
    this.items = [];
  }
  ngOnInit() {
    this.sub = this.notifService.items$.subscribe((i) => this.items = i);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  dismiss(id) {
    this.notifService.dismiss(id);
  }
  trackById(_, n) {
    return n.id;
  }
  static {
    this.\u0275fac = function NotificationHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationHostComponent)(\u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationHostComponent, selectors: [["app-notification-host"]], decls: 2, vars: 2, consts: [[1, "notif-container"], [3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "notif-left"], [1, "notif-icon"], ["class", "fas fa-circle-check", 4, "ngIf"], ["class", "fas fa-circle-xmark", 4, "ngIf"], ["class", "fas fa-triangle-exclamation", 4, "ngIf"], ["class", "fas fa-circle-info", 4, "ngIf"], [1, "notif-body"], [1, "notif-title"], ["class", "notif-desc", 4, "ngIf"], ["aria-label", "Dismiss", 1, "notif-close", 3, "click"], [1, "fas", "fa-xmark"], [1, "notif-progress"], [1, "fas", "fa-circle-check"], [1, "fas", "fa-circle-xmark"], [1, "fas", "fa-triangle-exclamation"], [1, "fas", "fa-circle-info"], [1, "notif-desc"]], template: function NotificationHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, NotificationHostComponent_div_1_Template, 14, 11, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.items)("ngForTrackBy", ctx.trackById);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.notif-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 2100;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 360px;\n  width: calc(100vw - 40px);\n  pointer-events: none;\n}\n.notif-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 14px 14px 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  pointer-events: all;\n  animation: _ngcontent-%COMP%_notifSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;\n  position: relative;\n  overflow: hidden;\n}\n@keyframes _ngcontent-%COMP%_notifSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.notif-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n.notif-success[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.notif-error[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.notif-warning[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.notif-info[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n}\n.notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 3px;\n}\n.notif-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n  line-height: 1.4;\n}\n.notif-close[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n  margin-top: -2px;\n  background: transparent;\n  border: none;\n  color: #5a5e7a;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  transition: all 0.18s;\n}\n.notif-close[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #a0a4c0;\n}\n.notif-progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.2);\n  animation: _ngcontent-%COMP%_notifProgress linear forwards;\n  width: 100%;\n}\n@keyframes _ngcontent-%COMP%_notifProgress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n.notif-success[_ngcontent-%COMP%]   .notif-progress[_ngcontent-%COMP%] {\n  background: #22c55e;\n}\n.notif-error[_ngcontent-%COMP%]   .notif-progress[_ngcontent-%COMP%] {\n  background: #ef4444;\n}\n.notif-warning[_ngcontent-%COMP%]   .notif-progress[_ngcontent-%COMP%] {\n  background: #f59e0b;\n}\n.notif-info[_ngcontent-%COMP%]   .notif-progress[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n}\n.notif-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 14px 0 0 14px;\n}\n.notif-success[_ngcontent-%COMP%]::before {\n  background: #22c55e;\n}\n.notif-error[_ngcontent-%COMP%]::before {\n  background: #ef4444;\n}\n.notif-warning[_ngcontent-%COMP%]::before {\n  background: #f59e0b;\n}\n.notif-info[_ngcontent-%COMP%]::before {\n  background: #4f6ef7;\n}\n/*# sourceMappingURL=notification-host.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationHostComponent, [{
    type: Component,
    args: [{ selector: "app-notification-host", standalone: true, imports: [CommonModule], template: `
    <div class="notif-container">
      <div
        *ngFor="let n of items; trackBy: trackById"
        class="notif-card notif-{{ n.type }}"
      >
        <div class="notif-left">
          <span class="notif-icon">
            <i *ngIf="n.type==='success'" class="fas fa-circle-check"></i>
            <i *ngIf="n.type==='error'"   class="fas fa-circle-xmark"></i>
            <i *ngIf="n.type==='warning'" class="fas fa-triangle-exclamation"></i>
            <i *ngIf="n.type==='info'"    class="fas fa-circle-info"></i>
          </span>
        </div>
        <div class="notif-body">
          <p class="notif-title">{{ n.title }}</p>
          <p class="notif-desc" *ngIf="n.description">{{ n.description }}</p>
        </div>
        <button class="notif-close" (click)="dismiss(n.id)" aria-label="Dismiss">
          <i class="fas fa-xmark"></i>
        </button>
        <div class="notif-progress" [style.animation-duration]="n.duration + 'ms'"></div>
      </div>
    </div>
  `, styles: ['/* angular:styles/component:scss;6a81e2a79ea063c0d02940dd025dcb077d802b6d62fcf20fab89ca24f60cfe87;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/notification/notification-host.component.ts */\n.notif-container {\n  position: fixed;\n  top: 20px;\n  right: 20px;\n  z-index: 2100;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  max-width: 360px;\n  width: calc(100vw - 40px);\n  pointer-events: none;\n}\n.notif-card {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 14px;\n  padding: 14px 14px 20px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);\n  pointer-events: all;\n  animation: notifSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both;\n  position: relative;\n  overflow: hidden;\n}\n@keyframes notifSlideIn {\n  from {\n    opacity: 0;\n    transform: translateX(40px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.notif-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n}\n.notif-success .notif-icon {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.notif-error .notif-icon {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.notif-warning .notif-icon {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.notif-info .notif-icon {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n}\n.notif-body {\n  flex: 1;\n  min-width: 0;\n}\n.notif-title {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 3px;\n}\n.notif-desc {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n  line-height: 1.4;\n}\n.notif-close {\n  width: 26px;\n  height: 26px;\n  flex-shrink: 0;\n  margin-top: -2px;\n  background: transparent;\n  border: none;\n  color: #5a5e7a;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.8rem;\n  transition: all 0.18s;\n}\n.notif-close:hover {\n  background: rgba(255, 255, 255, 0.08);\n  color: #a0a4c0;\n}\n.notif-progress {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.2);\n  animation: notifProgress linear forwards;\n  width: 100%;\n}\n@keyframes notifProgress {\n  from {\n    width: 100%;\n  }\n  to {\n    width: 0%;\n  }\n}\n.notif-success .notif-progress {\n  background: #22c55e;\n}\n.notif-error .notif-progress {\n  background: #ef4444;\n}\n.notif-warning .notif-progress {\n  background: #f59e0b;\n}\n.notif-info .notif-progress {\n  background: #4f6ef7;\n}\n.notif-card::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  border-radius: 14px 0 0 14px;\n}\n.notif-success::before {\n  background: #22c55e;\n}\n.notif-error::before {\n  background: #ef4444;\n}\n.notif-warning::before {\n  background: #f59e0b;\n}\n.notif-info::before {\n  background: #4f6ef7;\n}\n/*# sourceMappingURL=notification-host.component.css.map */\n'] }]
  }], () => [{ type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationHostComponent, { className: "NotificationHostComponent", filePath: "src/app/shared/components/notification/notification-host.component.ts", lineNumber: 109 });
})();

// src/app/shared/components/confirm/confirm-host.component.ts
function ConfirmHostComponent_div_0_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.state.config.icon);
  }
}
function ConfirmHostComponent_div_0_ng_template_5_i_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function ConfirmHostComponent_div_0_ng_template_5_i_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 17);
  }
}
function ConfirmHostComponent_div_0_ng_template_5_i_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 18);
  }
}
function ConfirmHostComponent_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConfirmHostComponent_div_0_ng_template_5_i_0_Template, 1, 0, "i", 13)(1, ConfirmHostComponent_div_0_ng_template_5_i_1_Template, 1, 0, "i", 14)(2, ConfirmHostComponent_div_0_ng_template_5_i_2_Template, 1, 0, "i", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.state.config.type === "danger");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.config.type === "warning");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.state.config.type || ctx_r1.state.config.type === "default");
  }
}
function ConfirmHostComponent_div_0_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.state.config.description);
  }
}
function ConfirmHostComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275listener("click", function ConfirmHostComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlay($event));
    });
    \u0275\u0275elementStart(1, "div", 3)(2, "div", 4)(3, "span");
    \u0275\u0275template(4, ConfirmHostComponent_div_0_i_4_Template, 1, 2, "i", 5)(5, ConfirmHostComponent_div_0_ng_template_5_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 6)(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ConfirmHostComponent_div_0_p_10_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
    \u0275\u0275listener("click", function ConfirmHostComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.answer(false));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function ConfirmHostComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.answer(true));
    });
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const defaultIcon_r3 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("confirm-icon ci-", ctx_r1.state.config.type || "default", "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.config.icon)("ngIfElse", defaultIcon_r3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.state.config.title || "Are you sure?");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.config.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.state.config.cancelText || "No", " ");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("btn-cfm-ok btn-cfm-", ctx_r1.state.config.type || "default", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.state.config.okText || "Yes", " ");
  }
}
var ConfirmHostComponent = class _ConfirmHostComponent {
  constructor(confirmService) {
    this.confirmService = confirmService;
  }
  ngOnInit() {
    this.sub = this.confirmService.state$.subscribe((s) => this.state = s);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  answer(v) {
    this.confirmService._resolve(v);
  }
  onOverlay(e) {
    if (e.target.classList.contains("confirm-overlay")) {
      this.confirmService._resolve(false);
    }
  }
  static {
    this.\u0275fac = function ConfirmHostComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmHostComponent)(\u0275\u0275directiveInject(ConfirmService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmHostComponent, selectors: [["app-confirm-host"]], decls: 1, vars: 1, consts: [["defaultIcon", ""], ["class", "confirm-overlay", 3, "click", 4, "ngIf"], [1, "confirm-overlay", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "confirm-bubble"], [1, "confirm-icon-row"], [3, "class", 4, "ngIf", "ngIfElse"], [1, "confirm-text"], [1, "confirm-title"], ["class", "confirm-desc", 4, "ngIf"], [1, "confirm-actions"], [1, "btn-cfm-cancel", 3, "click"], [3, "click"], [1, "confirm-arrow"], ["class", "fas fa-triangle-exclamation", 4, "ngIf"], ["class", "fas fa-circle-exclamation", 4, "ngIf"], ["class", "fas fa-circle-question", 4, "ngIf"], [1, "fas", "fa-triangle-exclamation"], [1, "fas", "fa-circle-exclamation"], [1, "fas", "fa-circle-question"], [1, "confirm-desc"]], template: function ConfirmHostComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ConfirmHostComponent_div_0_Template, 17, 12, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.state.visible);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.confirm-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.confirm-bubble[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  padding: 18px 20px 16px;\n  width: 300px;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);\n  animation: _ngcontent-%COMP%_bubblePop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n}\n@keyframes _ngcontent-%COMP%_bubblePop {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.confirm-icon-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.confirm-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.ci-default[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n}\n.ci-danger[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.ci-warning[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.confirm-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.confirm-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n  line-height: 1.4;\n}\n.confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.btn-cfm-cancel[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #a0a4c0;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-cfm-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.btn-cfm-ok[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-cfm-default[_ngcontent-%COMP%] {\n  background: #4f6ef7;\n  color: #fff;\n}\n.btn-cfm-default[_ngcontent-%COMP%]:hover {\n  background: #3d5cf5;\n}\n.btn-cfm-danger[_ngcontent-%COMP%] {\n  background: #ef4444;\n  color: #fff;\n}\n.btn-cfm-danger[_ngcontent-%COMP%]:hover {\n  background: #dc2626;\n}\n.btn-cfm-warning[_ngcontent-%COMP%] {\n  background: #f59e0b;\n  color: #0f1123;\n}\n.btn-cfm-warning[_ngcontent-%COMP%]:hover {\n  background: #d97706;\n}\n/*# sourceMappingURL=confirm-host.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmHostComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-host", standalone: true, imports: [CommonModule], template: `
    <div class="confirm-overlay" *ngIf="state.visible" (click)="onOverlay($event)">
      <div class="confirm-bubble" role="dialog" aria-modal="true">
        <div class="confirm-icon-row">
          <span class="confirm-icon ci-{{ state.config.type || 'default' }}">
            <i *ngIf="state.config.icon; else defaultIcon" [class]="state.config.icon"></i>
            <ng-template #defaultIcon>
              <i *ngIf="state.config.type === 'danger'"  class="fas fa-triangle-exclamation"></i>
              <i *ngIf="state.config.type === 'warning'" class="fas fa-circle-exclamation"></i>
              <i *ngIf="!state.config.type || state.config.type === 'default'"
                 class="fas fa-circle-question"></i>
            </ng-template>
          </span>
          <div class="confirm-text">
            <p class="confirm-title">{{ state.config.title || 'Are you sure?' }}</p>
            <p class="confirm-desc" *ngIf="state.config.description">{{ state.config.description }}</p>
          </div>
        </div>
        <div class="confirm-actions">
          <button class="btn-cfm-cancel" (click)="answer(false)">
            {{ state.config.cancelText || 'No' }}
          </button>
          <button class="btn-cfm-ok btn-cfm-{{ state.config.type || 'default' }}" (click)="answer(true)">
            {{ state.config.okText || 'Yes' }}
          </button>
        </div>
        <div class="confirm-arrow"></div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;a28d75f19d5aea8913d2dcdff25d3b6ec30ec617b83a9e78b82d5f959cdded04;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/confirm/confirm-host.component.ts */\n.confirm-overlay {\n  position: fixed;\n  inset: 0;\n  z-index: 1500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.confirm-bubble {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 14px;\n  padding: 18px 20px 16px;\n  width: 300px;\n  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);\n  animation: bubblePop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n}\n@keyframes bubblePop {\n  from {\n    opacity: 0;\n    transform: scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.confirm-icon-row {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.confirm-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n}\n.ci-default {\n  background: rgba(79, 110, 247, 0.15);\n  color: #4f6ef7;\n}\n.ci-danger {\n  background: rgba(239, 68, 68, 0.15);\n  color: #ef4444;\n}\n.ci-warning {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.confirm-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #fff;\n  margin-bottom: 4px;\n}\n.confirm-desc {\n  font-size: 0.82rem;\n  color: #a0a4c0;\n  line-height: 1.4;\n}\n.confirm-actions {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.btn-cfm-cancel {\n  padding: 7px 16px;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #a0a4c0;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-cfm-cancel:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.btn-cfm-ok {\n  padding: 7px 16px;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-cfm-default {\n  background: #4f6ef7;\n  color: #fff;\n}\n.btn-cfm-default:hover {\n  background: #3d5cf5;\n}\n.btn-cfm-danger {\n  background: #ef4444;\n  color: #fff;\n}\n.btn-cfm-danger:hover {\n  background: #dc2626;\n}\n.btn-cfm-warning {\n  background: #f59e0b;\n  color: #0f1123;\n}\n.btn-cfm-warning:hover {\n  background: #d97706;\n}\n/*# sourceMappingURL=confirm-host.component.css.map */\n"] }]
  }], () => [{ type: ConfirmService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmHostComponent, { className: "ConfirmHostComponent", filePath: "src/app/shared/components/confirm/confirm-host.component.ts", lineNumber: 94 });
})();

// src/app/shared/components/modal/modal.component.ts
function ModalComponent_div_0_div_2_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function ModalComponent_div_0_div_2_button_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275element(1, "i", 11);
    \u0275\u0275elementEnd();
  }
}
function ModalComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ModalComponent_div_0_div_2_button_3_Template, 2, 0, "button", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.state.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.closable);
  }
}
function ModalComponent_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.state.content)("ngTemplateOutletContext", ctx_r1.state.context);
  }
}
function ModalComponent_div_0_div_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 16);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.state.footer);
  }
}
function ModalComponent_div_0_div_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 17);
    \u0275\u0275listener("click", function ModalComponent_div_0_div_5_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(2, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 18);
    \u0275\u0275listener("click", function ModalComponent_div_0_div_5_ng_container_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(4, "OK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
}
function ModalComponent_div_0_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275template(1, ModalComponent_div_0_div_5_ng_container_1_Template, 1, 1, "ng-container", 14)(2, ModalComponent_div_0_div_5_ng_container_2_Template, 5, 0, "ng-container", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.footer);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.footer === void 0);
  }
}
function ModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function ModalComponent_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBackdropClick($event));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275template(2, ModalComponent_div_0_div_2_Template, 4, 2, "div", 3);
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275template(4, ModalComponent_div_0_ng_container_4_Template, 1, 2, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ModalComponent_div_0_div_5_Template, 3, 2, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r1.state.width);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.title || ctx_r1.state.closable);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.state.content);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.state.footer !== null);
  }
}
var ModalComponent = class _ModalComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngOnInit() {
    this.sub = this.modalService.state$.subscribe((s) => this.state = s);
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  close() {
    this.modalService.close();
  }
  onBackdropClick(e) {
    if (e.target.classList.contains("modal-backdrop") && this.state.closable) {
      this.close();
    }
  }
  static {
    this.\u0275fac = function ModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ModalComponent)(\u0275\u0275directiveInject(ModalService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModalComponent, selectors: [["app-modal"]], decls: 1, vars: 1, consts: [["class", "modal-backdrop", 3, "click", 4, "ngIf"], [1, "modal-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "modal-wrap"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["class", "modal-close", "aria-label", "Close", 3, "click", 4, "ngIf"], ["aria-label", "Close", 1, "modal-close", 3, "click"], [1, "fas", "fa-xmark"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "modal-footer"], [3, "ngTemplateOutlet", 4, "ngIf"], [4, "ngIf"], [3, "ngTemplateOutlet"], [1, "btn-modal-cancel", 3, "click"], [1, "btn-modal-ok", 3, "click"]], template: function ModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ModalComponent_div_0_Template, 6, 5, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.state.open);
      }
    }, dependencies: [CommonModule, NgIf, NgTemplateOutlet], styles: ["\n\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: _ngcontent-%COMP%_fadeIn 0.18s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-wrap[_ngcontent-%COMP%] {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  max-width: calc(100vw - 32px);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);\n  animation: _ngcontent-%COMP%_slideUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 0;\n}\n.modal-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.01em;\n}\n.modal-close[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.06);\n  border: none;\n  border-radius: 8px;\n  color: #a0a4c0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.18);\n  color: #ef4444;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 20px 24px;\n  overflow-y: auto;\n  flex: 1;\n  color: #c8ccdf;\n}\n.modal-footer[_ngcontent-%COMP%] {\n  padding: 0 24px 20px;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.btn-modal-cancel[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #a0a4c0;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-modal-cancel[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.btn-modal-ok[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  border-radius: 10px;\n  background: #4f6ef7;\n  border: none;\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-modal-ok[_ngcontent-%COMP%]:hover {\n  background: #3d5cf5;\n  box-shadow: 0 0 16px rgba(79, 110, 247, 0.45);\n}\n/*# sourceMappingURL=modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalComponent, [{
    type: Component,
    args: [{ selector: "app-modal", standalone: true, imports: [CommonModule], template: `
    <div class="modal-backdrop" *ngIf="state.open" (click)="onBackdropClick($event)">
      <div class="modal-wrap" [style.width]="state.width" role="dialog" aria-modal="true">

        <!-- Header -->
        <div class="modal-header" *ngIf="state.title || state.closable">
          <span class="modal-title">{{ state.title }}</span>
          <button class="modal-close" *ngIf="state.closable" (click)="close()" aria-label="Close">
            <i class="fas fa-xmark"></i>
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <ng-container *ngIf="state.content"
            [ngTemplateOutlet]="state.content"
            [ngTemplateOutletContext]="state.context">
          </ng-container>
        </div>

        <!-- Footer -->
        <div class="modal-footer" *ngIf="state.footer !== null">
          <ng-container *ngIf="state.footer"
            [ngTemplateOutlet]="state.footer">
          </ng-container>
          <ng-container *ngIf="state.footer === undefined">
            <button class="btn-modal-cancel" (click)="close()">Cancel</button>
            <button class="btn-modal-ok" (click)="close()">OK</button>
          </ng-container>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;f9c2b405eeba0caabd7824b702c550aca1d00e744a20fd7bd8d6876fa5ef9be0;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/shared/components/modal/modal.component.ts */\n.modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  animation: fadeIn 0.18s ease;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.modal-wrap {\n  background: #1e2235;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  border-radius: 16px;\n  max-width: calc(100vw - 32px);\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);\n  animation: slideUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);\n}\n@keyframes slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(24px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 0;\n}\n.modal-title {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #fff;\n  letter-spacing: 0.01em;\n}\n.modal-close {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.06);\n  border: none;\n  border-radius: 8px;\n  color: #a0a4c0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.modal-close:hover {\n  background: rgba(239, 68, 68, 0.18);\n  color: #ef4444;\n}\n.modal-body {\n  padding: 20px 24px;\n  overflow-y: auto;\n  flex: 1;\n  color: #c8ccdf;\n}\n.modal-footer {\n  padding: 0 24px 20px;\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.btn-modal-cancel {\n  padding: 8px 20px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  color: #a0a4c0;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-modal-cancel:hover {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n}\n.btn-modal-ok {\n  padding: 8px 20px;\n  border-radius: 10px;\n  background: #4f6ef7;\n  border: none;\n  color: #fff;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.18s;\n}\n.btn-modal-ok:hover {\n  background: #3d5cf5;\n  box-shadow: 0 0 16px rgba(79, 110, 247, 0.45);\n}\n/*# sourceMappingURL=modal.component.css.map */\n"] }]
  }], () => [{ type: ModalService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModalComponent, { className: "ModalComponent", filePath: "src/app/shared/components/modal/modal.component.ts", lineNumber: 112 });
})();

// src/app/app.component.ts
var _c0 = () => ({ exact: true });
function AppComponent_aside_1_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_aside_1_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartCount > 9 ? "9+" : ctx_r0.cartCount);
  }
}
function AppComponent_aside_1_a_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28);
    \u0275\u0275element(1, "i", 29);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_aside_1_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30);
    \u0275\u0275element(1, "i", 31);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_aside_1_a_18_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 35);
    \u0275\u0275listener("error", function AppComponent_aside_1_a_18_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onAvatarError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.userAvatar, \u0275\u0275sanitizeUrl);
  }
}
function AppComponent_aside_1_a_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userInitial);
  }
}
function AppComponent_aside_1_a_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32)(1, "div", 33);
    \u0275\u0275template(2, AppComponent_aside_1_a_18_img_2_Template, 1, 1, "img", 34)(3, AppComponent_aside_1_a_18_span_3_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.userAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.userAvatar);
  }
}
function AppComponent_aside_1_a_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 36);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementEnd();
  }
}
function AppComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 6)(1, "div", 7)(2, "a", 8);
    \u0275\u0275element(3, "i", 9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "nav", 10)(5, "a", 11);
    \u0275\u0275element(6, "i", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 13);
    \u0275\u0275element(8, "i", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AppComponent_aside_1_a_9_Template, 2, 0, "a", 14);
    \u0275\u0275elementStart(10, "a", 15);
    \u0275\u0275element(11, "i", 16);
    \u0275\u0275template(12, AppComponent_aside_1_span_12_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, AppComponent_aside_1_a_13_Template, 2, 0, "a", 18)(14, AppComponent_aside_1_a_14_Template, 2, 0, "a", 19);
    \u0275\u0275elementStart(15, "a", 20);
    \u0275\u0275element(16, "i", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275template(18, AppComponent_aside_1_a_18_Template, 4, 2, "a", 23)(19, AppComponent_aside_1_a_19_Template, 2, 0, "a", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.cartCount > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isAdmin);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
  }
}
function AppComponent_app_navbar_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-navbar");
  }
}
function AppComponent_nav_6_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.cartCount > 9 ? "9+" : ctx_r0.cartCount);
  }
}
function AppComponent_nav_6_a_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Wishlist");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_nav_6_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 48);
    \u0275\u0275element(1, "i", 37);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Login");
    \u0275\u0275elementEnd()();
  }
}
function AppComponent_nav_6_a_16_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 52);
    \u0275\u0275listener("error", function AppComponent_nav_6_a_16_img_2_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.onAvatarError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", ctx_r0.userAvatar, \u0275\u0275sanitizeUrl);
  }
}
function AppComponent_nav_6_a_16_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userInitial);
  }
}
function AppComponent_nav_6_a_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 49)(1, "div", 50);
    \u0275\u0275template(2, AppComponent_nav_6_a_16_img_2_Template, 1, 1, "img", 51)(3, AppComponent_nav_6_a_16_span_3_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Profile");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.userAvatar);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.userAvatar);
  }
}
function AppComponent_nav_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 38)(1, "a", 39);
    \u0275\u0275element(2, "i", 12);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 40);
    \u0275\u0275element(6, "i", 9);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "Games");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 41);
    \u0275\u0275element(10, "i", 16);
    \u0275\u0275template(11, AppComponent_nav_6_span_11_Template, 2, 1, "span", 42);
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Cart");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AppComponent_nav_6_a_14_Template, 4, 0, "a", 43)(15, AppComponent_nav_6_a_15_Template, 4, 0, "a", 44)(16, AppComponent_nav_6_a_16_Template, 6, 2, "a", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r0.cartCount > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoggedIn);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoggedIn);
  }
}
var AppComponent = class _AppComponent {
  constructor(authService, cartService, router) {
    this.authService = authService;
    this.cartService = cartService;
    this.router = router;
    this.isAuthPage = false;
    this.cartCount = 0;
    this.apiBase = environment.apiUrl.replace("/api", "");
  }
  ngOnInit() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.isAuthPage = (e.urlAfterRedirects || e.url).startsWith("/auth");
    });
    this.cartService.cart$.subscribe((cart) => {
      this.cartCount = cart?.items?.length || 0;
    });
  }
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  get isAdmin() {
    return this.authService.isAdmin;
  }
  get userInitial() {
    return (this.authService.currentUser?.name || "U").charAt(0).toUpperCase();
  }
  get userAvatar() {
    const av = this.authService.currentUser?.avatar;
    if (!av)
      return "";
    if (av.startsWith("http"))
      return av;
    return `${this.apiBase}${av}`;
  }
  onAvatarError(event) {
    const img = event.target;
    img.style.display = "none";
    const fallback = img.nextElementSibling;
    if (fallback)
      fallback.style.display = "flex";
  }
  static {
    this.\u0275fac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(CartService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 11, vars: 5, consts: [[1, "app-shell"], ["class", "sidebar", 4, "ngIf"], [1, "content-wrap"], [4, "ngIf"], [1, "main-area"], ["class", "mobile-bottom-nav", 4, "ngIf"], [1, "sidebar"], [1, "sb-logo"], ["routerLink", "/", 1, "logo-wrap"], [1, "fas", "fa-gamepad"], [1, "sb-nav"], ["routerLink", "/", "routerLinkActive", "sb-active", "title", "Home", 1, "sb-item", 3, "routerLinkActiveOptions"], [1, "fas", "fa-house"], ["routerLink", "/products", "routerLinkActive", "sb-active", "title", "Games", 1, "sb-item"], ["routerLink", "/wishlist", "routerLinkActive", "sb-active", "class", "sb-item", "title", "Wishlist", 4, "ngIf"], ["routerLink", "/cart", "routerLinkActive", "sb-active", "title", "Cart", 1, "sb-item", "cart-item"], [1, "fas", "fa-cart-shopping"], ["class", "cart-dot", 4, "ngIf"], ["routerLink", "/orders", "routerLinkActive", "sb-active", "class", "sb-item", "title", "My Orders", 4, "ngIf"], ["routerLink", "/admin", "routerLinkActive", "sb-active", "class", "sb-item", "title", "Admin Panel", 4, "ngIf"], ["routerLink", "/ui", "routerLinkActive", "sb-active", "title", "UI Components", 1, "sb-item"], [1, "fas", "fa-layer-group"], [1, "sb-bottom"], ["routerLink", "/profile", "routerLinkActive", "sb-active", "class", "sb-item", "title", "My Profile", 4, "ngIf"], ["routerLink", "/auth/login", "class", "sb-item", "title", "Login", 4, "ngIf"], ["routerLink", "/wishlist", "routerLinkActive", "sb-active", "title", "Wishlist", 1, "sb-item"], [1, "fas", "fa-heart"], [1, "cart-dot"], ["routerLink", "/orders", "routerLinkActive", "sb-active", "title", "My Orders", 1, "sb-item"], [1, "fas", "fa-file-lines"], ["routerLink", "/admin", "routerLinkActive", "sb-active", "title", "Admin Panel", 1, "sb-item"], [1, "fas", "fa-gear"], ["routerLink", "/profile", "routerLinkActive", "sb-active", "title", "My Profile", 1, "sb-item"], [1, "avatar-sb"], ["alt", "avatar", "class", "avatar-sb-img", 3, "src", "error", 4, "ngIf"], ["alt", "avatar", 1, "avatar-sb-img", 3, "error", "src"], ["routerLink", "/auth/login", "title", "Login", 1, "sb-item"], [1, "fas", "fa-right-to-bracket"], [1, "mobile-bottom-nav"], ["routerLink", "/", "routerLinkActive", "mbn-active", "title", "Home", 1, "mbn-item", 3, "routerLinkActiveOptions"], ["routerLink", "/products", "routerLinkActive", "mbn-active", "title", "Games", 1, "mbn-item"], ["routerLink", "/cart", "routerLinkActive", "mbn-active", "title", "Cart", 1, "mbn-item", "mbn-cart"], ["class", "cart-badge", 4, "ngIf"], ["routerLink", "/wishlist", "routerLinkActive", "mbn-active", "class", "mbn-item", "title", "Wishlist", 4, "ngIf"], ["routerLink", "/auth/login", "routerLinkActive", "mbn-active", "class", "mbn-item", "title", "Login", 4, "ngIf"], ["routerLink", "/profile", "routerLinkActive", "mbn-active", "class", "mbn-item", "title", "Profile", 4, "ngIf"], [1, "cart-badge"], ["routerLink", "/wishlist", "routerLinkActive", "mbn-active", "title", "Wishlist", 1, "mbn-item"], ["routerLink", "/auth/login", "routerLinkActive", "mbn-active", "title", "Login", 1, "mbn-item"], ["routerLink", "/profile", "routerLinkActive", "mbn-active", "title", "Profile", 1, "mbn-item"], [1, "mbn-avatar"], ["alt", "avatar", "class", "mbn-avatar-img", 3, "src", "error", 4, "ngIf"], ["alt", "avatar", 1, "mbn-avatar-img", 3, "error", "src"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AppComponent_aside_1_Template, 20, 8, "aside", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, AppComponent_app_navbar_3_Template, 1, 0, "app-navbar", 3);
        \u0275\u0275elementStart(4, "main", 4);
        \u0275\u0275element(5, "router-outlet");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, AppComponent_nav_6_Template, 17, 6, "nav", 5);
        \u0275\u0275element(7, "app-message-host")(8, "app-notification-host")(9, "app-confirm-host")(10, "app-modal");
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isAuthPage);
        \u0275\u0275advance();
        \u0275\u0275classProp("full-w", ctx.isAuthPage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isAuthPage);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.isAuthPage);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      RouterOutlet,
      RouterModule,
      RouterLink,
      RouterLinkActive,
      NavbarComponent,
      MessageHostComponent,
      NotificationHostComponent,
      ConfirmHostComponent,
      ModalComponent
    ], styles: ['@charset "UTF-8";\n\n\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 84px;\n  min-height: 100vh;\n  background: #161929;\n  border-right: 1px solid rgba(255, 255, 255, 0.055);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 300;\n  animation: _ngcontent-%COMP%_slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes _ngcontent-%COMP%_slideInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-84px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sb-logo[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.logo-wrap[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7 0%,\n      #7c3aed 100%);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  color: #fff;\n  transition: transform 0.25s, box-shadow 0.25s;\n  box-shadow: 0 4px 15px rgba(79, 110, 247, 0.4);\n}\n.logo-wrap[_ngcontent-%COMP%]:hover {\n  transform: scale(1.08) rotate(-4deg);\n  box-shadow: 0 6px 22px rgba(79, 110, 247, 0.6);\n}\n.sb-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n  padding: 0 14px;\n}\n.sb-item[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 13px;\n  color: #5a5e7a;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  text-decoration: none;\n}\n.sb-item[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 110, 247, 0.12);\n  color: #a0a4c0;\n  transform: scale(1.1);\n}\n.sb-item.sb-active[_ngcontent-%COMP%] {\n  background: rgba(79, 110, 247, 0.18);\n  color: #4f6ef7;\n  box-shadow: 0 0 14px rgba(79, 110, 247, 0.25);\n}\n.sb-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n}\n.sb-nav[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:nth-child(1) {\n  animation: _ngcontent-%COMP%_fadeInSb 0.4s 0.1s both;\n}\n.sb-nav[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:nth-child(2) {\n  animation: _ngcontent-%COMP%_fadeInSb 0.4s 0.15s both;\n}\n.sb-nav[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:nth-child(3) {\n  animation: _ngcontent-%COMP%_fadeInSb 0.4s 0.2s both;\n}\n.sb-nav[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:nth-child(4) {\n  animation: _ngcontent-%COMP%_fadeInSb 0.4s 0.25s both;\n}\n.sb-nav[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:nth-child(5) {\n  animation: _ngcontent-%COMP%_fadeInSb 0.4s 0.3s both;\n}\n.sb-nav[_ngcontent-%COMP%]   .sb-item[_ngcontent-%COMP%]:nth-child(6) {\n  animation: _ngcontent-%COMP%_fadeInSb 0.4s 0.35s both;\n}\n@keyframes _ngcontent-%COMP%_fadeInSb {\n  from {\n    opacity: 0;\n    transform: translateX(-16px) scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.cart-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cart-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  min-width: 15px;\n  height: 15px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.58rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  animation: _ngcontent-%COMP%_scaleInPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes _ngcontent-%COMP%_scaleInPop {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.sb-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 0 14px;\n}\n.avatar-sb[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: white;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  overflow: hidden;\n}\n.avatar-sb-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.avatar-sb[_ngcontent-%COMP%]:hover {\n  transform: scale(1.12);\n}\n.content-wrap[_ngcontent-%COMP%] {\n  margin-left: 84px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.content-wrap.full-w[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.mobile-bottom-nav[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #161929;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  z-index: 400;\n  padding: 6px 0 8px;\n  justify-content: space-around;\n  align-items: center;\n  animation: _ngcontent-%COMP%_slideUpNav 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n  backdrop-filter: blur(12px);\n}\n@keyframes _ngcontent-%COMP%_slideUpNav {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.mbn-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  color: #5a5e7a;\n  text-decoration: none;\n  font-size: 0.62rem;\n  font-weight: 600;\n  padding: 6px 10px;\n  border-radius: 12px;\n  transition: all 0.2s;\n  position: relative;\n}\n.mbn-item[_ngcontent-%COMP%]:hover {\n  color: #a0a4c0;\n}\n.mbn-item.mbn-active[_ngcontent-%COMP%] {\n  color: #4f6ef7;\n}\n.mbn-item.mbn-active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 6px rgba(79, 110, 247, 0.6));\n}\n.mbn-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.mbn-cart[_ngcontent-%COMP%] {\n  position: relative;\n}\n.cart-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  min-width: 16px;\n  height: 16px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n}\n.mbn-avatar[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border-radius: 50%;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.mbn-avatar-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .content-wrap[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .mobile-bottom-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@supports (padding-bottom: env(safe-area-inset-bottom)) {\n  .mobile-bottom-nav[_ngcontent-%COMP%] {\n    padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  }\n}\n@media (max-width: 768px) {\n  .mbn-item[_ngcontent-%COMP%] {\n    min-height: 44px;\n    padding: 8px 10px;\n    flex: 1;\n    justify-content: center;\n  }\n  .mbn-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n  .mbn-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 360px) {\n  .mbn-item[_ngcontent-%COMP%] {\n    padding: 6px 6px;\n  }\n  .mbn-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mbn-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [
      CommonModule,
      RouterOutlet,
      RouterModule,
      NavbarComponent,
      MessageHostComponent,
      NotificationHostComponent,
      ConfirmHostComponent,
      ModalComponent
    ], template: `
    <div class="app-shell">

      <!-- \u2500\u2500 Left Icon Sidebar \u2500\u2500 -->
      <aside class="sidebar" *ngIf="!isAuthPage">
        <div class="sb-logo">
          <a routerLink="/" class="logo-wrap">
            <i class="fas fa-gamepad"></i>
          </a>
        </div>

        <nav class="sb-nav">
          <a routerLink="/" routerLinkActive="sb-active" [routerLinkActiveOptions]="{exact:true}"
             class="sb-item" title="Home">
            <i class="fas fa-house"></i>
          </a>

          <a routerLink="/products" routerLinkActive="sb-active"
             class="sb-item" title="Games">
            <i class="fas fa-gamepad"></i>
          </a>

          <a routerLink="/wishlist" routerLinkActive="sb-active"
             class="sb-item" title="Wishlist" *ngIf="isLoggedIn">
            <i class="fas fa-heart"></i>
          </a>

          <a routerLink="/cart" routerLinkActive="sb-active"
             class="sb-item cart-item" title="Cart">
            <i class="fas fa-cart-shopping"></i>
            <span class="cart-dot" *ngIf="cartCount > 0">{{ cartCount > 9 ? '9+' : cartCount }}</span>
          </a>

          <a routerLink="/orders" routerLinkActive="sb-active"
             class="sb-item" title="My Orders" *ngIf="isLoggedIn">
            <i class="fas fa-file-lines"></i>
          </a>

          <a routerLink="/admin" routerLinkActive="sb-active"
             class="sb-item" title="Admin Panel" *ngIf="isAdmin">
            <i class="fas fa-gear"></i>
          </a>

          <a routerLink="/ui" routerLinkActive="sb-active"
             class="sb-item" title="UI Components">
            <i class="fas fa-layer-group"></i>
          </a>
        </nav>

        <div class="sb-bottom">
          <a routerLink="/profile" routerLinkActive="sb-active"
             class="sb-item" title="My Profile" *ngIf="isLoggedIn">
            <div class="avatar-sb">
              <img *ngIf="userAvatar" [src]="userAvatar" alt="avatar" class="avatar-sb-img"
                (error)="onAvatarError($event)" />
              <span *ngIf="!userAvatar">{{ userInitial }}</span>
            </div>
          </a>
          <a routerLink="/auth/login" class="sb-item" title="Login" *ngIf="!isLoggedIn">
            <i class="fas fa-right-to-bracket"></i>
          </a>
        </div>
      </aside>

      <!-- \u2500\u2500 Main content \u2500\u2500 -->
      <div class="content-wrap" [class.full-w]="isAuthPage">
        <app-navbar *ngIf="!isAuthPage"></app-navbar>
        <main class="main-area">
          <router-outlet></router-outlet>
        </main>
      </div>

    </div>

    <!-- \u2500\u2500 Mobile Bottom Nav (shown only on mobile when not auth page) \u2500\u2500 -->
    <nav class="mobile-bottom-nav" *ngIf="!isAuthPage">
      <a routerLink="/" routerLinkActive="mbn-active" [routerLinkActiveOptions]="{exact:true}" class="mbn-item" title="Home">
        <i class="fas fa-house"></i>
        <span>Home</span>
      </a>
      <a routerLink="/products" routerLinkActive="mbn-active" class="mbn-item" title="Games">
        <i class="fas fa-gamepad"></i>
        <span>Games</span>
      </a>
      <a routerLink="/cart" routerLinkActive="mbn-active" class="mbn-item mbn-cart" title="Cart">
        <i class="fas fa-cart-shopping"></i>
        <span class="cart-badge" *ngIf="cartCount > 0">{{ cartCount > 9 ? '9+' : cartCount }}</span>
        <span>Cart</span>
      </a>
      <a routerLink="/wishlist" routerLinkActive="mbn-active" class="mbn-item" title="Wishlist" *ngIf="isLoggedIn">
        <i class="fas fa-heart"></i>
        <span>Wishlist</span>
      </a>
      <a routerLink="/auth/login" routerLinkActive="mbn-active" class="mbn-item" title="Login" *ngIf="!isLoggedIn">
        <i class="fas fa-right-to-bracket"></i>
        <span>Login</span>
      </a>
      <a routerLink="/profile" routerLinkActive="mbn-active" class="mbn-item" title="Profile" *ngIf="isLoggedIn">
        <div class="mbn-avatar">
          <img *ngIf="userAvatar" [src]="userAvatar" alt="avatar" class="mbn-avatar-img"
            (error)="onAvatarError($event)" />
          <span *ngIf="!userAvatar">{{ userInitial }}</span>
        </div>
        <span>Profile</span>
      </a>
    </nav>

    <!-- \u2500\u2500 Global UI Hosts \u2500\u2500 -->
    <app-message-host></app-message-host>
    <app-notification-host></app-notification-host>
    <app-confirm-host></app-confirm-host>
    <app-modal></app-modal>
  `, styles: ['@charset "UTF-8";\n\n/* angular:styles/component:scss;cf1a07d1826833245e4a881718b8a1fa6adb375e8a77378b145164d5ba0355e0;/Users/THARY-VIREAK/Documents/Project/online-game-shopping-system/frontend/src/app/app.component.ts */\n.app-shell {\n  display: flex;\n  min-height: 100vh;\n}\n.sidebar {\n  width: 84px;\n  min-height: 100vh;\n  background: #161929;\n  border-right: 1px solid rgba(255, 255, 255, 0.055);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 0;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 300;\n  animation: slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n}\n@keyframes slideInLeft {\n  from {\n    opacity: 0;\n    transform: translateX(-84px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.sb-logo {\n  margin-bottom: 28px;\n}\n.logo-wrap {\n  width: 46px;\n  height: 46px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7 0%,\n      #7c3aed 100%);\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  color: #fff;\n  transition: transform 0.25s, box-shadow 0.25s;\n  box-shadow: 0 4px 15px rgba(79, 110, 247, 0.4);\n}\n.logo-wrap:hover {\n  transform: scale(1.08) rotate(-4deg);\n  box-shadow: 0 6px 22px rgba(79, 110, 247, 0.6);\n}\n.sb-nav {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n  padding: 0 14px;\n}\n.sb-item {\n  width: 46px;\n  height: 46px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 13px;\n  color: #5a5e7a;\n  transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  text-decoration: none;\n}\n.sb-item:hover {\n  background: rgba(79, 110, 247, 0.12);\n  color: #a0a4c0;\n  transform: scale(1.1);\n}\n.sb-item.sb-active {\n  background: rgba(79, 110, 247, 0.18);\n  color: #4f6ef7;\n  box-shadow: 0 0 14px rgba(79, 110, 247, 0.25);\n}\n.sb-item i {\n  font-size: 1.15rem;\n}\n.sb-nav .sb-item:nth-child(1) {\n  animation: fadeInSb 0.4s 0.1s both;\n}\n.sb-nav .sb-item:nth-child(2) {\n  animation: fadeInSb 0.4s 0.15s both;\n}\n.sb-nav .sb-item:nth-child(3) {\n  animation: fadeInSb 0.4s 0.2s both;\n}\n.sb-nav .sb-item:nth-child(4) {\n  animation: fadeInSb 0.4s 0.25s both;\n}\n.sb-nav .sb-item:nth-child(5) {\n  animation: fadeInSb 0.4s 0.3s both;\n}\n.sb-nav .sb-item:nth-child(6) {\n  animation: fadeInSb 0.4s 0.35s both;\n}\n@keyframes fadeInSb {\n  from {\n    opacity: 0;\n    transform: translateX(-16px) scale(0.85);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n  }\n}\n.cart-item {\n  position: relative;\n}\n.cart-dot {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  min-width: 15px;\n  height: 15px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.58rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n  animation: scaleInPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n}\n@keyframes scaleInPop {\n  from {\n    opacity: 0;\n    transform: scale(0);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.sb-bottom {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 0 14px;\n}\n.avatar-sb {\n  width: 36px;\n  height: 36px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: white;\n  transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);\n  overflow: hidden;\n}\n.avatar-sb-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.avatar-sb:hover {\n  transform: scale(1.12);\n}\n.content-wrap {\n  margin-left: 84px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  min-width: 0;\n  overflow-x: hidden;\n}\n.content-wrap.full-w {\n  margin-left: 0;\n}\n.main-area {\n  flex: 1;\n}\n.mobile-bottom-nav {\n  display: none;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #161929;\n  border-top: 1px solid rgba(255, 255, 255, 0.07);\n  z-index: 400;\n  padding: 6px 0 8px;\n  justify-content: space-around;\n  align-items: center;\n  animation: slideUpNav 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;\n  backdrop-filter: blur(12px);\n}\n@keyframes slideUpNav {\n  from {\n    transform: translateY(100%);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.mbn-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  color: #5a5e7a;\n  text-decoration: none;\n  font-size: 0.62rem;\n  font-weight: 600;\n  padding: 6px 10px;\n  border-radius: 12px;\n  transition: all 0.2s;\n  position: relative;\n}\n.mbn-item:hover {\n  color: #a0a4c0;\n}\n.mbn-item.mbn-active {\n  color: #4f6ef7;\n}\n.mbn-item.mbn-active i {\n  filter: drop-shadow(0 0 6px rgba(79, 110, 247, 0.6));\n}\n.mbn-item i {\n  font-size: 1.3rem;\n}\n.mbn-cart {\n  position: relative;\n}\n.cart-badge {\n  position: absolute;\n  top: 2px;\n  right: 6px;\n  min-width: 16px;\n  height: 16px;\n  background: #ef4444;\n  color: white;\n  border-radius: 50%;\n  font-size: 0.6rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 3px;\n}\n.mbn-avatar {\n  width: 24px;\n  height: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f6ef7,\n      #7c3aed);\n  border-radius: 50%;\n  font-size: 0.7rem;\n  font-weight: 700;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.mbn-avatar-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n  .content-wrap {\n    margin-left: 0;\n  }\n  .mobile-bottom-nav {\n    display: flex;\n  }\n}\n@supports (padding-bottom: env(safe-area-inset-bottom)) {\n  .mobile-bottom-nav {\n    padding-bottom: calc(8px + env(safe-area-inset-bottom));\n  }\n}\n@media (max-width: 768px) {\n  .mbn-item {\n    min-height: 44px;\n    padding: 8px 10px;\n    flex: 1;\n    justify-content: center;\n  }\n  .mbn-item span {\n    font-size: 0.6rem;\n  }\n  .mbn-item i {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 360px) {\n  .mbn-item {\n    padding: 6px 6px;\n  }\n  .mbn-item span {\n    display: none;\n  }\n  .mbn-item i {\n    font-size: 1.3rem;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */\n'] }]
  }], () => [{ type: AuthService }, { type: CartService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 324 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/animations/fesm2022/private_export-faY_wCkZ.mjs:
@angular/animations/fesm2022/util-D9FfmVnv.mjs:
@angular/animations/fesm2022/browser.mjs:
@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v19.2.19
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
