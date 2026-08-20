window.__ModuleLoader__.load({ id: 'dsh-march7th-skin', factory: (require) => { var module = { exports: {} }; var exports = module.exports;
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.ts
var index_exports = {};
__export(index_exports, {
  BODY_ATTR: () => BODY_ATTR,
  CHAT_SCROLL_ATTR: () => CHAT_SCROLL_ATTR,
  LAYER: () => LAYER,
  apply: () => apply,
  inject: () => inject
});
module.exports = __toCommonJS(index_exports);

// src/client/skin.css
var skin_default = `/* ============================================================
   \u4E09\u6708\u4E03 \xB7 \u76AE\u80A4\u6837\u5F0F
   \u5168\u90E8\u89C4\u5219\u4EE5 body[data-march7th-skin] \u4E3A\u524D\u7F00\uFF08\u63D2\u4EF6\u62E5\u6709\u7684\u95E8\u63A7\u5C5E\u6027\uFF09\uFF1B
   \u6DF1\u8272\u53D8\u4F53\u8FFD\u52A0 [data-ds-dark-theme]\uFF08\u4E3B\u9898 presenter \u7BA1\u7406\uFF09\u3002
   ============================================================ */

/* ---------- 0. \u76AE\u80A4\u81EA\u5B9A\u4E49\u5C5E\u6027 ---------- */
:root {
  --m7-ice: #6fb7e8;
  --m7-ice-deep: #4e9fdd;
  --m7-pink: #ff8fab;
  --m7-ink: #1c2b45;
  --m7-glass: rgba(255, 255, 255, 0.55);
  --m7-glass-strong: rgba(255, 255, 255, 0.78);
  --m7-glass-dark: rgba(21, 33, 58, 0.66);
  --m7-radius: 14px;
  --m7-shadow: 0 8px 28px rgba(31, 80, 140, 0.10);
  --m7-chat-composer-gap: 16px;
  --m7-character-active-height: 64%;
  --m7-character-active-width-cap: 62cqw;
  --m7-character-active-outset: 8%;
}

/* \u516D\u8FB9\u5F62\u51B0\u6676\u7EB9\u7406\uFF08SVG data URI\uFF0C\u4EFB\u610F\u5C3A\u5BF8\u5E73\u94FA\uFF09 */
:root {
  --m7-crystal: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cpath d='M28 2 52 15v26L28 54 4 41V15Z' fill='none' stroke='%237fb8e8' stroke-opacity='0.18'/%3E%3Ccircle cx='28' cy='28' r='3' fill='%23ff8fab' fill-opacity='0.25'/%3E%3C/svg%3E");
}

/* ---------- 1. \u5168\u5C40\u5E95\u8272\uFF1A\u51B0\u84DD\u5929\u7A7A + \u7C89\u8272\u4F59\u6656 ---------- */
body[data-march7th-skin] {
  background:
    radial-gradient(1100px 500px at 85% -10%, rgba(111, 183, 232, 0.28), transparent 60%),
    radial-gradient(900px 480px at -10% 110%, rgba(255, 143, 171, 0.16), transparent 55%),
    var(--dsw-alias-bg-base);
}

/* ---------- 2. \u804A\u5929\u80CC\u666F\uFF1A\u661F\u7A7A\u591C\u666F\u80CC\u666F\u56FE ---------- */
body[data-march7th-skin] [data-conversation-scroll] {
  background:
    linear-gradient(180deg, rgba(248, 251, 254, 0.06), rgba(248, 251, 254, 0.24)),
    url('/skins/march7th/background.webp') center / cover no-repeat,
    var(--dsw-alias-bg-base);
}
body[data-march7th-skin][data-ds-dark-theme] [data-conversation-scroll] {
  background:
    linear-gradient(180deg, rgba(14, 23, 38, 0.16), rgba(14, 23, 38, 0.40)),
    url('/skins/march7th/background.webp') center / cover no-repeat,
    var(--dsw-alias-bg-base);
}

/* ---------- 2a. \u4E3B\u754C\u9762\u6807\u9898\u4E0E\u4E0A\u4E0B\u6587\u9009\u62E9\u5668 ---------- */
/* HeroShell \u6CA1\u6709\u516C\u5F00 data \u5C5E\u6027\uFF0C\u4F46\u9C7C\u5F62 Logo \u4F7F\u7528\u7A33\u5B9A\u7684\u539F\u751F viewBox\u3002
   \u4EE5\u5B83\u5B9A\u4F4D\u771F\u5B9E\u6807\u9898 DOM\uFF0C\u53EF\u4EE5\u4FDD\u7559\u5BBF\u4E3B\u7684\u52A8\u753B\u3001\u56FD\u9645\u5316\u6587\u672C\u548C\u5E03\u5C40\u8BED\u4E49\u3002 */
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> span > svg[viewBox='0 0 23.16 17.04']) {
  position: relative;
  grid-template-columns: 48px auto auto;
  column-gap: 12px;
  min-height: 58px;
  padding: 4px 34px 8px;
  font-family:
    'Microsoft YaHei UI', 'Microsoft YaHei', 'PingFang SC', system-ui,
    sans-serif;
  isolation: isolate;
}

/* \u6807\u9898\u540E\u65B9\u53EA\u653E\u67D4\u5149\uFF0C\u4E0D\u653E\u53EF\u70B9\u51FB\u8986\u76D6\u5C42\u3002 */
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> span > svg[viewBox='0 0 23.16 17.04'])::before {
  content: '';
  position: absolute;
  inset: -12px -34px -8px;
  z-index: -1;
  border-radius: 50%;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 245, 253, 0.78) 0%,
    rgba(242, 217, 250, 0.34) 48%,
    transparent 76%
  );
  filter: blur(8px);
  pointer-events: none;
}

/* \u9C7C\u5F62 Logo \u4F7F\u7528\u4E00\u679A\u534A\u900F\u660E\u7684\u6A31\u82B1\u8272\u5FBD\u7AE0\u627F\u6258\uFF0C\u907F\u514D\u5728\u6DF1\u8272\u80CC\u666F\u4E0A\u53D1\u7070\u3002 */
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> span > svg[viewBox='0 0 23.16 17.04'])
  > span:has(> svg[viewBox='0 0 23.16 17.04']) {
  box-sizing: border-box;
  width: 46px;
  height: 46px;
  border: 1px solid rgba(224, 93, 160, 0.38);
  border-radius: 50%;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.92),
    rgba(255, 217, 239, 0.72) 54%,
    rgba(218, 214, 255, 0.74)
  );
  color: #df579d;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.96),
    0 5px 16px rgba(164, 72, 133, 0.18);
}
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  svg[viewBox='0 0 23.16 17.04'] {
  width: 31px;
  height: auto;
  color: #df579d;
  filter:
    drop-shadow(0 1px 0 rgba(255, 255, 255, 0.92))
    drop-shadow(0 2px 4px rgba(132, 62, 118, 0.20));
}

/* \u6807\u9898\u91C7\u7528\u9875\u9762\u73B0\u6709\u7684\u6A31\u82B1\u7C89\u5230\u51B0\u6676\u7D2B\u6E10\u53D8\uFF0C\u5E76\u7528\u767D\u8272\u9AD8\u5149\u4FDD\u8BC1\u5E95\u56FE\u4E0A\u53EF\u8BFB\u3002 */
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  span:has(> svg[viewBox='0 0 23.16 17.04']) + span {
  background: linear-gradient(90deg, #cf438b 0%, #e85ca4 38%, #8b70d8 100%);
  background-clip: text;
  color: #a43c7a;
  font-size: clamp(30px, 2.15vw, 42px);
  line-height: 1.16;
  font-weight: 800;
  letter-spacing: 0.055em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 1px rgba(255, 255, 255, 0.92));
}

/* \u201C\u9884\u89C8\u7248\u201D\u4FDD\u7559\u771F\u5B9E\u6587\u672C\u8282\u70B9\uFF0C\u6539\u6210\u4E0E\u8F93\u5165\u6846\u91D1\u7C89\u8FB9\u76F8\u547C\u5E94\u7684\u5C0F\u5FBD\u7AE0\u3002 */
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  span:has(> svg[viewBox='0 0 23.16 17.04']) + span + span {
  align-self: center;
  margin: 0 0 0 -2px;
  padding: 3px 11px 2px;
  border: 1px solid rgba(212, 83, 150, 0.42);
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(255, 252, 254, 0.90),
    rgba(244, 225, 250, 0.84)
  );
  color: #a94378;
  font-family: inherit;
  font-size: 12px;
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.90);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.94),
    0 4px 12px rgba(147, 72, 130, 0.13);
}

/* \u5DE5\u4F5C\u533A\u6309\u94AE\u662F\u8FD9\u4E00\u884C\u552F\u4E00\u5E26 aria-label \u7684\u83DC\u5355\u6309\u94AE\u3002\u4EE5\u5B83\u5B9A\u4F4D\u6574\u884C\uFF0C
   \u518D\u7EDF\u4E00\u88C5\u9970\u5DE5\u4F5C\u533A\u548C\u6A21\u5F0F\u4E24\u4E2A\u771F\u5B9E button\uFF1B\u8F93\u5165\u5361\u5185\u90E8\u7684\u6A21\u578B\u9009\u62E9\u4E0D\u4F1A\u547D\u4E2D\u3002 */
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> button[aria-label][aria-haspopup='menu']) {
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 6px;
  padding-left: 0;
}
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> button[aria-label][aria-haspopup='menu'])
  button[aria-haspopup='menu'] {
  box-sizing: border-box;
  min-height: 38px;
  padding: 7px 14px;
  border: 1px solid rgba(215, 91, 154, 0.34);
  border-radius: 999px;
  background: linear-gradient(
    135deg,
    rgba(255, 253, 255, 0.82),
    rgba(250, 224, 241, 0.72) 54%,
    rgba(230, 225, 255, 0.74)
  );
  color: #93416f;
  font-family:
    'Microsoft YaHei UI', 'Microsoft YaHei', 'PingFang SC', system-ui,
    sans-serif;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  letter-spacing: 0.015em;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.92);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.96),
    0 5px 15px rgba(146, 69, 126, 0.14);
  backdrop-filter: blur(10px) saturate(1.1);
  transition:
    transform 0.18s ease,
    border-color 0.18s ease,
    background 0.18s ease,
    box-shadow 0.18s ease;
}
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> button[aria-label][aria-haspopup='menu'])
  button[aria-haspopup='menu'] svg {
  color: #c4508b;
}
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> button[aria-label][aria-haspopup='menu'])
  button[aria-haspopup='menu']:is(:hover, [aria-expanded='true']):not(:disabled) {
  transform: translateY(-1px);
  border-color: rgba(210, 73, 143, 0.58);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.94),
    rgba(255, 211, 236, 0.88) 54%,
    rgba(222, 216, 255, 0.88)
  );
  color: #812e62;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    0 7px 18px rgba(148, 58, 117, 0.21);
}
body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
  div:has(> button[aria-label][aria-haspopup='menu'])
  button[aria-haspopup='menu']:focus-visible {
  outline: 2px solid rgba(221, 79, 151, 0.66);
  outline-offset: 2px;
}

/* \u4E3B\u754C\u9762\u7684\u5DE5\u4F5C\u533A\u3001\u6A21\u5F0F\u83DC\u5355\u7531\u5BBF\u4E3B Portal \u5230 body\uFF0C\u4E0D\u80FD\u6CBF\u6309\u94AE\u7236\u7EA7\u9009\u4E2D\u3002
   \u4EC5\u5728 hero \u9009\u62E9\u5668\u5904\u4E8E\u5C55\u5F00\u72B6\u6001\u65F6\u7ED9\u5F53\u524D Portal \u83DC\u5355\u6362\u80A4\uFF0C\u907F\u514D\u5F71\u54CD\u8BBE\u7F6E\u9875\u3001
   \u8F93\u5165\u6846\u4EE5\u53CA\u5BF9\u8BDD\u9875\u4E2D\u7684\u5176\u4ED6\u83DC\u5355\u3002 */
body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'],
body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] [role='menu'] {
  --dsw-specific-menu: rgba(255, 248, 253, 0.95);
  --dsw-alias-label-primary: #733358;
  --dsw-alias-label-secondary: #87506e;
  --dsw-alias-label-tertiary: #a26f8c;
  --dsw-alias-label-caption: #9a748d;
  --dsw-alias-border-l1: rgba(228, 119, 173, 0.42);
  --dsw-alias-border-l2: rgba(222, 109, 166, 0.34);
  --dsw-alias-interactive-bg-hover: rgba(247, 178, 216, 0.32);
  --dsw-alias-interactive-bg-selected: rgba(238, 183, 222, 0.38);
  min-width: min(300px, calc(100vw - 24px));
  max-width: min(390px, calc(100vw - 24px));
  padding: 8px;
  border: 1px solid rgba(224, 105, 165, 0.44);
  border-radius: 20px;
  background:
    linear-gradient(
      145deg,
      rgba(255, 253, 255, 0.96),
      rgba(255, 232, 246, 0.93) 54%,
      rgba(235, 231, 255, 0.94)
    );
  color: #733358;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    0 16px 40px rgba(116, 55, 105, 0.22),
    0 0 0 3px rgba(255, 225, 242, 0.42);
  backdrop-filter: blur(20px) saturate(1.2);
}

body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] button[role='menuitem'] {
  min-height: 44px;
  padding: 9px 11px;
  border: 1px solid transparent;
  border-radius: 13px;
  color: #733358;
  transition:
    color 0.16s ease,
    border-color 0.16s ease,
    background 0.16s ease,
    box-shadow 0.16s ease,
    transform 0.16s ease;
}

body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] button[role='menuitem']:is(:hover, :focus-visible) {
  border-color: rgba(226, 112, 170, 0.3);
  background: linear-gradient(
    100deg,
    rgba(255, 223, 240, 0.72),
    rgba(231, 226, 255, 0.64)
  );
  color: #963963;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.92),
    0 4px 12px rgba(159, 70, 126, 0.12);
  transform: translateY(-1px);
  outline: none;
}

/* Menu \u9009\u4E2D\u9879\u4F1A\u5728\u6309\u94AE\u672B\u5C3E\u6E32\u67D3\u76F4\u5C5E check SVG\u3002 */
body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] button[role='menuitem']:has(> svg:last-child) {
  border-color: rgba(215, 82, 149, 0.36);
  background: linear-gradient(
    100deg,
    rgba(255, 211, 234, 0.78),
    rgba(225, 218, 255, 0.7)
  );
  color: #8f315f;
  box-shadow: inset 3px 0 0 #e45a9d;
}

body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] button[role='menuitem'] > svg:last-child {
  color: #d84f91;
  filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.9));
}

/* \u6A21\u5F0F\u9879\u7684\u540D\u79F0\u548C\u8BF4\u660E\u7531\u4E1A\u52A1\u7EC4\u4EF6\u5D4C\u5957\u5728 Menu label \u5185\u3002 */
body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] button[role='menuitem'] > span > span > span:first-child {
  color: #733358;
  font-weight: 750;
}

body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] button[role='menuitem'] > span > span > span + span {
  color: #96768b;
  line-height: 1.45;
}

body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] [role='separator'] {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(219, 102, 161, 0.34),
    transparent
  );
}

body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] ::-webkit-scrollbar {
  width: 8px;
}

body[data-march7th-skin]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'] ::-webkit-scrollbar-thumb {
  border: 2px solid transparent;
  border-radius: 999px;
  background: linear-gradient(#ed8fbe, #b99be4) padding-box;
}

@media (max-width: 760px), (max-height: 700px) {
  body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
    div:has(> span > svg[viewBox='0 0 23.16 17.04']) {
    grid-template-columns: 40px auto auto;
    column-gap: 8px;
    padding-inline: 12px;
  }
  body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
    div:has(> span > svg[viewBox='0 0 23.16 17.04'])
    > span:has(> svg[viewBox='0 0 23.16 17.04']) {
    width: 40px;
    height: 40px;
  }
  body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
    span:has(> svg[viewBox='0 0 23.16 17.04']) + span {
    font-size: clamp(24px, 7vw, 32px);
  }
  body[data-march7th-skin] [data-phase='hero'] [data-composer-seat]
    div:has(> button[aria-label][aria-haspopup='menu']) {
    gap: 6px;
    flex-wrap: wrap;
  }
}

/* ---------- 2a. \u5BF9\u8BDD\u9875\u9876\u90E8 Header\uFF1A\u6A31\u82B1\u857E\u4E1D\u753B\u6846 ---------- */
/* conversation.session.header \u662F ConversationRoot \u5728\u6EDA\u52A8\u533A\u4E0A\u65B9\u63D0\u4F9B\u7684\u7A33\u5B9A
   \u63D2\u69FD\u3002header.webp \u7684\u5B8C\u6574\u753B\u5E03\u4E3A 1843 x 853\uFF0C\u800C\u6709\u6548\u88C5\u9970\u5E26\u4F4D\u4E8E\u753B\u5E03\u4E2D\u592E
   \u7EA6 33% \u7684\u9AD8\u5EA6\uFF0C\u56E0\u6B64\u7528\u7EA6 3 \u500D\u7EB5\u5411\u80CC\u666F\u5C3A\u5BF8\u628A\u8BE5\u5E26\u88C1\u8FDB\u539F\u751F 83px header\uFF1B
   \u6807\u9898\u3001\u9875\u7B7E\u548C Session log \u4ECD\u662F\u5BBF\u4E3B\u771F\u5B9E DOM\uFF0C\u4E0D\u5F71\u54CD\u70B9\u51FB\u4E0E\u952E\u76D8\u64CD\u4F5C\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true']) {
  --dsw-alias-label-primary: #9f4778;
  --dsw-alias-label-secondary: #ad668c;
  --dsw-alias-label-tertiary: #b8779b;
  --dsw-alias-label-caption: #bd82a2;
  --dsw-alias-state-business-primary: #df5a9d;
  --dsw-alias-border-l2: transparent;
  background:
    url('/skins/march7th/header.webp')
    center 48.8% / 100% 301.5% no-repeat,
    linear-gradient(90deg, rgba(255, 247, 252, 0.90), rgba(242, 239, 255, 0.86));
  padding-left: 56px;
  border-bottom: 0;
  box-shadow: 0 7px 20px rgba(126, 78, 145, 0.12);
}

/* header.webp \u81EA\u5E26\u5E95\u90E8\u857E\u4E1D\u548C\u63CF\u8FB9\uFF0C\u5173\u95ED\u5BBF\u4E3B\u539F\u751F\u7684 1px \u5206\u9694\u7EBF\uFF0C\u907F\u514D\u4E24\u6761
   \u4E0B\u8FB9\u754C\u53E0\u5728\u4E00\u8D77\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])::after {
  content: none;
}

/* \u6DF1\u8272\u4E3B\u9898\u4E0B\u8BE5\u7D20\u6750\u4ECD\u4FDD\u6301\u5176\u672C\u8EAB\u7684\u6D45\u8272\u753B\u6846\uFF0C\u6587\u5B57\u6539\u7528\u540C\u4E00\u5957\u6DF1\u7C89\u58A8\u8272\uFF0C
   \u4E0D\u7EE7\u627F\u5168\u5C40\u6DF1\u8272 header \u7684\u6D45\u7070\u6807\u7B7E\u3002 */
body[data-march7th-skin][data-ds-dark-theme] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true']) {
  --dsw-alias-label-primary: #8f3e6d;
  --dsw-alias-label-secondary: #a35c83;
  --dsw-alias-label-tertiary: #ad6d90;
  --dsw-alias-label-caption: #b57a9a;
  --dsw-alias-state-business-primary: #d94f94;
}

/* Header \u5B57\u4F53\u5C42\u7EA7\uFF1A\u6807\u9898\u6700\u9192\u76EE\uFF0C\u6A21\u5F0F/\u5BFC\u51FA\u64CD\u4F5C\u4F7F\u7528\u8F7B\u91CF\u80F6\u56CA\uFF0C\u9875\u7B7E\u4EE5\u7C89\u8272
   \u9AD8\u5149\u533A\u5206\u5F53\u524D\u89C6\u56FE\u3002\u53EA\u4F9D\u8D56\u516C\u5F00\u7684 slot\u3001nav \u548C ARIA \u7ED3\u6784\uFF0C\u4E0D\u7ED1\u5B9A CSS Module
   \u751F\u6210\u7684\u7C7B\u540D\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true']) {
  font-family:
    'Microsoft YaHei UI', 'Microsoft YaHei', 'PingFang SC', system-ui,
    sans-serif;
}

/* \u4F1A\u8BDD\u6807\u9898\uFF1A\u4F7F\u7528\u9AD8\u5BF9\u6BD4\u5EA6\u7684\u5B9E\u8272\u6DF1\u73AB\u7EA2\u3002\u6B64\u524D\u7684\u900F\u660E\u6E10\u53D8\u5B57\u4F1A\u8BA9\u767D\u8272 text-shadow
   \u900F\u8FC7\u5B57\u9762\uFF0C\u5728\u6D45\u8272\u82B1\u7EB9\u4E0A\u770B\u8D77\u6765\u53D1\u767D\uFF1B\u5B9E\u8272\u586B\u5145\u53EF\u7A33\u5B9A\u4FDD\u8BC1\u53EF\u8BFB\u6027\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true']) nav[aria-label] button,
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true']) nav[aria-label] > span {
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.015em;
  background: transparent;
  color: #8f2e66;
  -webkit-text-fill-color: #8f2e66;
  -webkit-text-stroke: 0.15px rgba(103, 26, 74, 0.20);
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.92),
    0 2px 5px rgba(128, 39, 89, 0.22);
}

/* Header \u4E2D\u771F\u6B63\u53EF\u4EA4\u4E92\u7684\u4F1A\u8BDD\u7EA7\u52A8\u4F5C\u7EE7\u7EED\u4F7F\u7528\u80F6\u56CA\u6309\u94AE\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])
  [data-slot='conversation.session.header.actions']
  > :is(button, [role='button']) {
  height: 26px;
  padding: 2px 10px;
  border: 1px solid rgba(222, 115, 169, 0.25);
  border-radius: 13px;
  background: rgba(255, 250, 253, 0.54);
  color: #ad537f;
  font-family: inherit;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.80);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.72),
    0 2px 7px rgba(142, 74, 123, 0.08);
}

/* \u201C\u6807\u51C6\u6A21\u5F0F/\u521B\u9020\u6A21\u5F0F\u201D\u7531\u5BBF\u4E3B\u5B9A\u4E49\u4E3A\u5F53\u524D\u4F1A\u8BDD\u7684\u53EA\u8BFB\u6A21\u5F0F\u6807\u7B7E\uFF0C\u5E76\u4E0D\u662F\u6309\u94AE\uFF1B
   \u53BB\u6389\u5BB9\u6613\u4EA7\u751F\u53EF\u70B9\u51FB\u9519\u89C9\u7684\u80F6\u56CA\u5E95\u8272\uFF0C\u540C\u65F6\u63D0\u9AD8\u6587\u5B57\u548C\u56FE\u6807\u8FA8\u8BC6\u5EA6\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])
  [data-slot='conversation.session.header.actions'] > span {
  height: 24px;
  padding: 0 2px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #a74778;
  font-family: inherit;
  font-size: 13px;
  font-weight: 650;
  line-height: 24px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.86);
  box-shadow: none;
  cursor: default;
}
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])
  [data-slot='conversation.session.header.actions'] > span svg {
  color: #c6538a;
  opacity: 0.88;
}

/* \u53F3\u4FA7 Session log\uFF1A\u4E0E\u6A21\u5F0F\u6807\u7B7E\u540C\u8272\uFF0C\u4F46\u8FB9\u6846\u548C\u5E95\u8272\u7565\u5F3A\uFF0C\u5F62\u6210\u53EF\u64CD\u4F5C\u611F\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])
  [data-slot='conversation.session.header.utilities'] button {
  border-color: rgba(207, 79, 145, 0.38);
  background: rgba(255, 248, 252, 0.68);
  color: #a63c74;
  font-family: inherit;
  font-size: 13px;
  font-weight: 650;
  letter-spacing: 0.015em;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.82);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.82),
    0 3px 9px rgba(150, 66, 117, 0.11);
}
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])
  [data-slot='conversation.session.header.utilities'] button:hover:not(:disabled) {
  border-color: rgba(207, 79, 145, 0.58);
  background: rgba(255, 226, 241, 0.76);
  color: #8f2f67;
}

/* \u9875\u7B7E\uFF1A\u672A\u9009\u4E2D\u4FDD\u6301\u67D4\u548C\u73AB\u7D2B\uFF0C\u5F53\u524D\u9875\u7B7E\u52A0\u7C97\u5E76\u4F7F\u7528\u6E10\u53D8\u9AD8\u5149\u4E0B\u5212\u7EBF\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true']) [role='tablist'] > [role='tab'] {
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #b66d96;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.78);
}
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])
  [role='tablist'] > [role='tab'][aria-selected='true'] {
  color: #d5428c;
  font-weight: 750;
}
body[data-march7th-skin] [data-phase='active']
  > [data-slot='conversation.session.header']
  > header:not([aria-hidden='true'])
  [role='tablist'] > [role='tab'][aria-selected='true']::after {
  bottom: 0;
  height: 3px;
  border-radius: 3px;
  background: linear-gradient(90deg, #ff91ba, #d94894, #9d6ddd);
  box-shadow: 0 1px 5px rgba(211, 70, 144, 0.34);
}

/* \u6D88\u606F\u8282\u70B9\uFF1A\u78E8\u7802\u73BB\u7483\u5361\u7247\uFF08\u6D45\u8272\uFF09 */
body[data-march7th-skin] [data-chat-flow-key] {
  background: var(--m7-glass);
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: var(--m7-radius);
  box-shadow: var(--m7-shadow);
  backdrop-filter: blur(6px);
  transition: background 0.2s var(--ds-ease-in-out), box-shadow 0.2s var(--ds-ease-in-out);
}
body[data-march7th-skin] [data-chat-flow-key]:hover {
  background: var(--m7-glass-strong);
  box-shadow: 0 10px 32px rgba(31, 80, 140, 0.16);
}
/* Assistant \u6B63\u6587\u5361\u7247\u7684\u5185\u5BB9\u5B89\u5168\u8FB9\u8DDD\uFF1A\u6587\u5B57\u3001\u6807\u9898\u3001\u4EE3\u7801\u5757\u548C\u5E95\u90E8\u64CD\u4F5C\u6309\u94AE
   \u4E0D\u518D\u7D27\u8D34\u73BB\u7483\u5361\u7247\u8FB9\u754C\uFF1B\u5DE5\u5177\u6761\u548C\u7528\u6237\u6C14\u6CE1\u7EF4\u6301\u5404\u81EA\u539F\u751F\u7D27\u51D1\u5E03\u5C40\u3002 */
body[data-march7th-skin] [data-chat-flow-kind='assistant-step'] {
  padding: 16px 20px;
}
/* \u6D88\u606F\u8282\u70B9\uFF1A\u6DF1\u8272\u53D8\u4F53 */
body[data-march7th-skin][data-ds-dark-theme] [data-chat-flow-key] {
  background: var(--m7-glass-dark);
  border-color: rgba(140, 190, 240, 0.14);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.30);
}

/* \u7528\u6237\u8F93\u5165\u5185\u90E8\u5DF2\u7ECF\u6709\u72EC\u7ACB\u7684\u6D88\u606F\u6C14\u6CE1\uFF0C\u4E0D\u518D\u5957\u7528\u5360\u6EE1\u6574\u884C\u7684\u73BB\u7483\u5BF9\u8BDD\u5361\u7247\u3002 */
body[data-march7th-skin] [data-chat-flow-kind='user'],
body[data-march7th-skin] [data-chat-flow-kind='steering'],
body[data-march7th-skin][data-ds-dark-theme] [data-chat-flow-kind='user'],
body[data-march7th-skin][data-ds-dark-theme] [data-chat-flow-kind='steering'],
body[data-march7th-skin] [data-chat-flow-kind='user']:hover,
body[data-march7th-skin] [data-chat-flow-kind='steering']:hover {
  padding: 0;
  border: none;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
}

/* ---------- 3. \u8F93\u5165\u6846\uFF1A\u78E8\u7802\u73BB\u7483\u80F6\u56CA + \u7C89\u8272\u805A\u7126 ---------- */
/* \u53BB\u6389 active \u9636\u6BB5\u5EA7\u4F4D\u9ED8\u8BA4\u7684\u300C\u900F\u660E \u2192 bg-base 36px\u300D\u5E95\u90E8\u6E10\u53D8\u906E\u7F69\uFF0C
   \u8BA9\u804A\u5929\u80CC\u666F\u548C\u4EBA\u7269\u5728\u8F93\u5165\u5361\u7247\u5468\u56F4\u4FDD\u6301\u53EF\u89C1\uFF1B\u8F93\u5165\u5361\u7247\u81EA\u8EAB\u4ECD\u8D1F\u8D23\u53EF\u8BFB\u6027\u3002 */
body[data-march7th-skin] [data-phase] [data-composer-seat],
body[data-march7th-skin] [data-composer-seat] {
  background: transparent;
}

/* \u8F93\u5165\u6808\u62AC\u5230\u4EBA\u7269\u4E4B\u4E0A\uFF08z-index 3 > \u4EBA\u7269 0\uFF09\uFF1A\u4EFB\u4F55\u9636\u6BB5\uFF08\u542B hero \u5C45\u4E2D\u8F93\u5165\u6846\uFF09
   \u90FD\u4E0D\u4F1A\u88AB\u7ACB\u7ED8\u906E\u6321\uFF0C\u5C42\u7EA7\u4FDD\u6301 \u5BF9\u8BDD\u6846 > \u4EBA\u7269 > \u80CC\u666F\u3002 */
body[data-march7th-skin] [data-composer-seat] > * {
  position: relative;
  z-index: 3;
}

/* \u81EA\u5B9A\u4E49\u8F93\u5165\u5361\u7247\uFF1Ainput.webp \u662F 1985 x 792 \u7684\u5B8C\u6574\u900F\u660E\u88C5\u9970\u753B\u5E03\u3002\u56FE\u7247\u653E\u5728
   \u539F\u751F\u63A7\u4EF6\u4E0B\u65B9\uFF0C\u6587\u672C\u533A\u3001\u6743\u9650\u9009\u62E9\u3001\u6A21\u578B\u9009\u62E9\u548C\u53D1\u9001\u6309\u94AE\u4ECD\u4F7F\u7528 DSH \u7684\u771F\u5B9E
   DOM\uFF0C\u56E0\u6B64\u952E\u76D8\u3001\u7126\u70B9\u3001\u52A0\u8F7D\u6001\u548C\u70ED\u66F4\u65B0\u884C\u4E3A\u4E0D\u53D7\u5F71\u54CD\u3002 */
body[data-march7th-skin] [data-composer-card] {
  --dsw-alias-label-primary: #1c2b45;
  --dsw-alias-label-secondary: #52647e;
  --dsw-alias-label-tertiary: #6b7d96;
  --dsw-alias-label-caption: #6b7d96;
  --dsw-alias-button-info-fill: #ff8fb5;
  --dsw-alias-button-info-hover: #ff6f9f;
  --dsw-specific-selector: #ffb2cc;
  position: relative;
  isolation: isolate;
  box-sizing: border-box;
  min-height: clamp(280px, 27vh, 520px);
  padding:
    clamp(72px, 8vh, 118px)
    clamp(42px, 3.2vw, 76px)
    clamp(34px, 3vh, 50px);
  overflow: visible;
  border: 0;
  border-radius: clamp(28px, 2vw, 48px);
  background: transparent;
  box-shadow: none;
  backdrop-filter: none;
}
body[data-march7th-skin] [data-composer-card]::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: inherit;
  background:
    url('/skins/march7th/input.webp')
    center / 100% 100% no-repeat;
  filter: drop-shadow(0 14px 30px rgba(112, 83, 165, 0.20));
  pointer-events: none;
}
body[data-march7th-skin] [data-composer-card] > * {
  position: relative;
  z-index: 1;
}
/* \u539F\u751F\u5DE5\u5177\u680F\u7D27\u8DDF\u5728 data-input-scroll \u540E\u9762\uFF1B\u81EA\u52A8\u4E0A\u8FB9\u8DDD\u6D88\u5316\u8F93\u5165\u5361\u7247\u7684\u5269\u4F59
   \u9AD8\u5EA6\uFF0C\u8BA9\u6309\u94AE\u884C\u8D34\u8FD1\u753B\u6846\u4E0B\u6CBF\uFF0C\u800C\u4E0D\u662F\u505C\u5728\u5361\u7247\u4E2D\u90E8\u5E76\u5728\u4E0B\u65B9\u7559\u4E0B\u5927\u5757\u7A7A\u767D\u3002 */
body[data-march7th-skin] [data-composer-card]
  [data-input-scroll] + div {
  margin-top: auto;
  padding-bottom: 15px;
}

/* \u201C+\u201D \u662F\u5DE5\u5177\u680F\u4E2D\u552F\u4E00\u4E00\u4E2A aria-haspopup=listbox \u4E14\u53EA\u5305\u542B\u5355\u4E2A SVG \u7684\u6309\u94AE\uFF1B
   \u8FD9\u6837\u4E0D\u4F1A\u8BEF\u4F24\u540C\u4E00\u884C\u4E2D\u7684\u6743\u9650\u6216\u6A21\u578B\u9009\u62E9\u5668\u3002\u53D1\u9001/\u505C\u6B62\u6309\u94AE\u4F7F\u7528\u4E0A\u65B9\u5C40\u90E8\u7684
   info-fill token\uFF0C\u56E0\u6B64\u4E24\u79CD\u8FD0\u884C\u72B6\u6001\u90FD\u4F1A\u81EA\u52A8\u91C7\u7528\u4E3B\u9898\u7C89\u8272\u3002 */
body[data-march7th-skin] [data-composer-card]
  button[aria-haspopup='listbox']:has(> svg:only-child) {
  background: linear-gradient(145deg, #ffc0d5, #ff8fb5);
  color: #fff;
  box-shadow:
    0 5px 14px rgba(230, 91, 143, 0.24),
    inset 0 1px 0 rgba(255, 255, 255, 0.72);
}
body[data-march7th-skin] [data-composer-card]
  button[aria-haspopup='listbox']:has(> svg:only-child):hover:not(:disabled) {
  background: linear-gradient(145deg, #ffafd0, #ff6f9f);
}
body[data-march7th-skin][data-ds-dark-theme] [data-composer-card] {
  background: transparent;
  border-color: transparent;
}
body[data-march7th-skin] [data-composer-card]:focus-within {
  border-color: transparent;
  box-shadow: none;
}
body[data-march7th-skin] [data-composer-card]:focus-within::before {
  filter:
    drop-shadow(0 0 9px rgba(255, 143, 171, 0.48))
    drop-shadow(0 14px 30px rgba(112, 83, 165, 0.22));
}
/* \u7C89\u8272\u5149\u6807 */
body[data-march7th-skin] [data-composer-card] textarea {
  caret-color: var(--m7-pink);
  color: var(--m7-ink);
}
body[data-march7th-skin] [data-composer-card] textarea::placeholder {
  color: rgba(82, 100, 126, 0.72);
}

/* \u8FDB\u5165\u5BF9\u8BDD\u540E\u7F29\u77ED\u8F93\u5165\u5361\u7247\uFF0C\u628A\u66F4\u591A\u5782\u76F4\u7A7A\u95F4\u7559\u7ED9\u5BF9\u8BDD\u6D41\uFF1Bhero \u4E3B\u754C\u9762\u7EE7\u7EED\u5C55\u793A
   \u63A5\u8FD1\u7D20\u6750\u539F\u59CB\u6784\u56FE\u6BD4\u4F8B\u7684\u5927\u8F93\u5165\u6846\u3002 */
body[data-march7th-skin] [data-phase='active'] [data-composer-card] {
  min-height: clamp(210px, 19vh, 350px);
  padding:
    clamp(56px, 6vh, 88px)
    clamp(38px, 3vw, 68px)
    clamp(28px, 2.5vh, 40px);
}

@media (max-width: 900px), (max-height: 760px) {
  body[data-march7th-skin] [data-composer-card],
  body[data-march7th-skin] [data-phase='active'] [data-composer-card] {
    min-height: 190px;
    padding: 52px 30px 28px;
    border-radius: 26px;
  }
}

/* ---------- 3b. \u4E3B\u89C6\u89C9\u533A\u57DF\u5DE6\u53F3\u4E0B\u89D2\u7684\u7AD9\u59FF\u4EBA\u7269 ---------- */
/* \u4EBA\u7269\u6302\u5728\u4E0D\u6EDA\u52A8\u7684\u5BF9\u8BDD\u6839\u5BB9\u5668\uFF08\u5E26 data-phase \u4E14\u76F4\u63A5\u5305\u542B\u6EDA\u52A8\u533A\u7684\u5143\u7D20\uFF09\u4E0A\uFF1A
   \u6839\u5BB9\u5668\u81EA\u8EAB\u4ECE\u4E0D\u6EDA\u52A8\uFF0Cposition: absolute + bottom: 0 \u628A\u4EBA\u7269\u9489\u5728\u9875\u9762\u5E95\u90E8\uFF0C
   \u65E0\u8BBA\u804A\u5929\u6EDA\u52A8\u6761\u600E\u4E48\u6EDA\u4EBA\u7269\u90FD\u4FDD\u6301\u5728\u9875\u9762\u4E0A\uFF08\u6B64\u524D\u6302\u5728\u6EDA\u52A8\u533A\u4E0A\u4F1A\u968F\u5185\u5BB9\u6EDA\u52A8\uFF09\u3002
   container-type \u653E\u5728\u6839\u5BB9\u5668\u4E0A\uFF0Ccqw \u5355\u4F4D\u7167\u5E38\u8DDF\u968F\u5217\u5BBD\u3002 */
body[data-march7th-skin] [data-phase]:has(> [data-conversation-scroll]) {
  position: relative;
  container-type: inline-size;
}
/* \u4EBA\u7269\uFF1A\u951A\u5B9A\u5DE6\u4E0B/\u53F3\u4E0B\u89D2\uFF0C\u53CC\u811A\u59CB\u7EC8\u8D34\u4F4F\u4E3B\u89C6\u89C9\u533A\u57DF\u5E95\u90E8\u3002
   \u9AD8\u5EA6 = min(\u4E3B\u89C6\u89C9\u533A\u57DF\u53EF\u89C1\u9AD8\u5EA6\u7684 86.5%, \u4E3B\u89C6\u89C9\u533A\u57DF\u5BBD\u5EA6\u7684 85%)\uFF1A
   \xB7 86.5% \u2014\u2014 \u5E38\u89C4\u684C\u9762\u4E0B\u7531\u53EF\u89C1\u9AD8\u5EA6\u4E3B\u5BFC\uFF0C\u4EBA\u7269\u9876\u90E8\u7EA6\u7559\u51FA 13.5%\uFF1B
   \xB7 85cqw \u2014\u2014 \u7A84\u5C4F\u4E0B\u968F\u804A\u5929\u5217\u5BBD\u7F29\u5C0F\uFF0C\u907F\u514D\u4F7F\u7528\u56FA\u5B9A\u50CF\u7D20\u9AD8\u5EA6\u3002
   \u4F2A\u5143\u7D20\u6BD4\u4F8B\u5FC5\u987B\u4E0E 1086 \xD7 1448 \u7684\u7ACB\u7ED8\u753B\u5E03\u4E00\u81F4\uFF1B\u5426\u5219 background-size:
   contain \u4F1A\u53D7\u8FC7\u7A84\u7684\u5143\u7D20\u5BBD\u5EA6\u9650\u5236\uFF0C\u5BFC\u81F4\u4EBA\u7269\u53EA\u80FD\u663E\u793A\u5230\u9884\u671F\u9AD8\u5EA6\u7684\u4E00\u534A\u5DE6\u53F3\u3002
   z \u8F74\uFF1A\u4EBA\u7269\u4F4D\u4E8E\u80CC\u666F\u4E4B\u4E0A\uFF08z-index 0\uFF09\u3001\u6D88\u606F\u5361\u7247\uFF08z-index 1\uFF09\u4E4B\u4E0B\uFF1B
   \u804A\u5929\u8F93\u5165\u6846\u7EE7\u7EED\u4F4D\u4E8E\u6700\u9AD8\u5C42\uFF08\u8F93\u5165\u6808 z-index 3\uFF0Cactive \u9636\u6BB5\u5EA7\u4F4D z-index 7\uFF09\u3002
   \u6700\u7EC8\u5C42\u7EA7\u4E3A \u8F93\u5165\u6846 > \u804A\u5929\u5185\u5BB9 > \u4EBA\u7269 > \u80CC\u666F\u3002 */
body[data-march7th-skin] [data-phase]:has(> [data-conversation-scroll])::before,
body[data-march7th-skin] [data-phase]:has(> [data-conversation-scroll])::after {
  content: '';
  position: absolute;
  bottom: 0;
  z-index: 0;
  height: min(86.5%, 85cqw);
  aspect-ratio: 3 / 4;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  pointer-events: none; /* \u4E0D\u62E6\u622A\u4EFB\u4F55\u9F20\u6807\u4E8B\u4EF6 */
  opacity: 0.95;
  filter: drop-shadow(0 14px 26px rgba(8, 18, 36, 0.38));
  transition:
    height 0.28s var(--ds-ease-in-out),
    transform 0.28s var(--ds-ease-in-out);
}
/* \u5DE6\u4FA7\u4EBA\u7269\uFF1A\u5DE6\u4E0B\u89D2\u951A\u70B9\uFF1B\u5DE6\u7F18\u7565\u5FAE\u5916\u79FB\uFF0C\u8BA9\u624B\u4E2D\u8BB0\u4E8B\u672C/\u8863\u6446\u4EA7\u751F\u81EA\u7136\u88C1\u5207 */
body[data-march7th-skin] [data-phase]:has(> [data-conversation-scroll])::before {
  left: 0;
  transform: translateX(-2.5%);
  background-image: url('/skins/march7th/character1_night.webp');
}
/* \u53F3\u4FA7\u4EBA\u7269\uFF1A\u53F3\u4E0B\u89D2\u951A\u70B9\uFF1B\u82E5\u539F\u56FE\u671D\u5411\u4E0E\u6784\u56FE\u4E0D\u7B26\uFF0C\u5728 transform \u91CC\u52A0\u56DE/\u53BB\u6389
   scaleX(-1) \u5373\u53EF\u5207\u6362\u5DE6\u53F3\u955C\u50CF\u65B9\u5411\u3002 */
body[data-march7th-skin] [data-phase]:has(> [data-conversation-scroll])::after {
  right: 0;
  transform: translateX(2.5%);
  background-image: url('/skins/march7th/character2_night.webp');
}
/* \u4E3B\u754C\u9762\uFF08hero\uFF09\u6CBF\u7528\u4E0A\u9762\u7684 86.5% \u5927\u7ACB\u7ED8\uFF1B\u8FDB\u5165\u5BF9\u8BDD\uFF08active\uFF09\u540E\u7F29\u5C0F\u5E76
   \u5411\u4E24\u4FA7\u9000\u51FA\uFF0C\u4E3A\u5C45\u4E2D\u7684\u5BF9\u8BDD\u6D41\u7559\u51FA\u7A33\u5B9A\u7684\u9605\u8BFB\u7A7A\u95F4\u3002 */
body[data-march7th-skin]
  [data-phase='active']:has(> [data-conversation-scroll])::before,
body[data-march7th-skin]
  [data-phase='active']:has(> [data-conversation-scroll])::after {
  height: min(
    var(--m7-character-active-height),
    var(--m7-character-active-width-cap)
  );
}
body[data-march7th-skin]
  [data-phase='active']:has(> [data-conversation-scroll])::before {
  transform: translateX(calc(-1 * var(--m7-character-active-outset)));
}
body[data-march7th-skin]
  [data-phase='active']:has(> [data-conversation-scroll])::after {
  transform: translateX(var(--m7-character-active-outset));
}
/* \u8F68\u8FF9\u89C6\u56FE\u4F7F\u7528 composer overlay \u6807\u8BB0\uFF1B\u8BE5\u9875\u9762\u4EE5\u4FE1\u606F\u5BC6\u5EA6\u4E3A\u4E3B\uFF0C\u4E0D\u5C55\u793A\u4EBA\u7269\u7ACB\u7ED8\u3002 */
body[data-march7th-skin]
  [data-phase]:has([data-conversation-composer-overlay])::before,
body[data-march7th-skin]
  [data-phase]:has([data-conversation-composer-overlay])::after {
  display: none;
}

/* ---------- 3c. Trajectory view: no composer, translucent ledger ---------- */
/* The trajectory root publishes data-conversation-composer-overlay.  Hide the
   sibling composer seat only while that root is mounted; the Conversation tab
   and the hero page keep their normal input card. */
body[data-march7th-skin] [data-phase='active']
  > [data-conversation-scroll]:has([data-conversation-composer-overlay])
  > [data-composer-seat] {
  display: none;
}

/* Re-skin the entire trajectory subtree through its semantic colour tokens.
   Descendant toolbar, timeline and table surfaces consume these variables, so
   the palace artwork remains visible without making the ledger text faint. */
body[data-march7th-skin]
  [data-conversation-composer-overlay] {
  --dsw-alias-bg-base: rgba(255, 252, 254, 0.50);
  --dsw-alias-bg-layer-1: rgba(255, 249, 253, 0.72);
  --dsw-alias-bg-layer-2: rgba(246, 242, 255, 0.66);
  --dsw-alias-bg-layer-3: rgba(255, 235, 246, 0.68);
  --dsw-alias-bg-overlay: rgba(244, 231, 249, 0.76);
  --dsw-alias-bg-module-platform: rgba(255, 248, 252, 0.70);
  --dsw-specific-sidebar-fill: rgba(253, 238, 248, 0.78);
  --dsw-alias-border-l1: rgba(211, 105, 161, 0.18);
  --dsw-alias-border-l2: rgba(197, 91, 151, 0.28);
  --dsw-alias-border-l3: rgba(181, 79, 139, 0.36);
  --dsw-alias-label-primary: #55243f;
  --dsw-alias-label-secondary: #79516a;
  --dsw-alias-label-tertiary: #95657e;
  --dsw-alias-label-caption: #a97691;
  --dsw-alias-state-business-primary: #d94f94;
  --dsw-alias-interactive-bg-hover: rgba(232, 111, 171, 0.12);
  --dsw-alias-interactive-bg-active: rgba(221, 83, 153, 0.18);
  --dsh-composer-height: 0px !important;
  background: rgba(255, 249, 253, 0.62);
  backdrop-filter: blur(9px) saturate(1.08);
}

body[data-march7th-skin][data-ds-dark-theme]
  [data-conversation-composer-overlay] {
  --dsw-alias-bg-base: rgba(44, 31, 58, 0.52);
  --dsw-alias-bg-layer-1: rgba(48, 34, 63, 0.70);
  --dsw-alias-bg-layer-2: rgba(57, 41, 75, 0.66);
  --dsw-alias-bg-layer-3: rgba(69, 44, 75, 0.68);
  --dsw-alias-bg-overlay: rgba(64, 43, 78, 0.78);
  --dsw-alias-bg-module-platform: rgba(53, 37, 68, 0.72);
  --dsw-specific-sidebar-fill: rgba(69, 43, 70, 0.78);
  --dsw-alias-label-primary: #fff1f8;
  --dsw-alias-label-secondary: #ebc7da;
  --dsw-alias-label-tertiary: #d8a9c3;
  --dsw-alias-label-caption: #c995b1;
  background: rgba(42, 29, 57, 0.60);
}

/* The native ledger reserves space for the floating composer.  On this page
   the composer is intentionally absent, leaving only a small breathing room. */
body[data-march7th-skin]
  [data-conversation-composer-overlay] [data-trajectory-scroll] {
  --dsh-trajectory-bottom-clearance: 16px;
}

/* Toolbar controls and the search field use a restrained sakura treatment.
   Real buttons/inputs remain untouched in the DOM, preserving all behaviour. */
body[data-march7th-skin]
  [data-conversation-composer-overlay] [role='toolbar'] {
  border-bottom-color: rgba(202, 96, 153, 0.30);
  background: linear-gradient(
    90deg,
    rgba(255, 248, 252, 0.76),
    rgba(241, 238, 255, 0.68)
  );
  box-shadow: 0 3px 12px rgba(130, 75, 132, 0.08);
}
body[data-march7th-skin]
  [data-conversation-composer-overlay] [role='toolbar'] button {
  color: #9b5279;
  font-family:
    'Microsoft YaHei UI', 'Microsoft YaHei', 'PingFang SC', system-ui,
    sans-serif;
  font-weight: 600;
}
body[data-march7th-skin]
  [data-conversation-composer-overlay]
  [role='toolbar'] button:is(:hover, [aria-pressed='true']) {
  color: #8f2f67;
  background: rgba(225, 91, 157, 0.13);
}
body[data-march7th-skin]
  [data-conversation-composer-overlay]
  [role='toolbar'] :has(> input[type='search']) {
  border-color: rgba(210, 111, 165, 0.34);
  border-radius: 11px;
  background: rgba(255, 252, 254, 0.68);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.78);
}

/* Titles inside the trajectory ledger use the same deep rose ink as the
   session header, with a pale highlight so they stay legible on the artwork. */
body[data-march7th-skin]
  [data-conversation-composer-overlay]
  :is(h1, h2, h3, h4, [role='heading'], th) {
  color: #8f3268;
  font-family:
    'Microsoft YaHei UI', 'Microsoft YaHei', 'PingFang SC', system-ui,
    sans-serif;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.84);
}
/* \u6D88\u606F\u5361\u7247\u62AC\u5230\u4EBA\u7269\u4E4B\u4E0A\uFF08z-index 1 > 0\uFF09\uFF0C\u907F\u514D\u7ACB\u7ED8\u906E\u6321\u804A\u5929\u6587\u5B57\uFF1B
   \u804A\u5929\u8F93\u5165\u6846\uFF08\u5EA7\u4F4D z-index 7\uFF09\u7EE7\u7EED\u4F4D\u4E8E\u6700\u4E0A\u5C42\u3002 */
body[data-march7th-skin] [data-chat-flow-key] {
  position: relative;
  z-index: 1;
}

/* active \u9636\u6BB5\u4F7F\u7528\u4E0A\u4E0B\u4E24\u4E2A\u4E92\u4E0D\u91CD\u53E0\u7684\u533A\u57DF\uFF1A\u4F1A\u8BDD\u5185\u5BB9\u72EC\u7ACB\u6EDA\u52A8\uFF0C\u8F93\u5165\u6846\u5360\u636E\u5E95\u90E8
   \u5E03\u5C40\u7A7A\u95F4\u3002data-march7th-chat-scroll \u7531\u63D2\u4EF6\u6302\u5230 ChatView \u81EA\u5E26\u7684\u6EDA\u52A8\u5143\u7D20\u4E0A\uFF0C
   \u540C\u65F6\u4FDD\u7559 data-conversation-scroll \u4F9B\u6846\u67B6\u7684\u8DDF\u968F\u6EDA\u52A8\u4E0E\u201C\u56DE\u5230\u5E95\u90E8\u201D\u903B\u8F91\u8BC6\u522B\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-conversation-scroll]:not([data-march7th-chat-scroll]) {
  overflow: hidden;
}

/* Slot \u5305\u88C5\u5668\u662F display: contents\uFF1B\u4E0B\u9762\u4E24\u4E2A\u9009\u62E9\u5668\u5206\u522B\u538B\u7F29 Session viewArea
   \u548C ChatView root\uFF0C\u4F7F\u5185\u90E8\u6EDA\u52A8\u533A\u53EA\u4F7F\u7528\u8F93\u5165\u6846\u4E0A\u65B9\u7684\u5269\u4F59\u9AD8\u5EA6\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-conversation-scroll]:not([data-march7th-chat-scroll])
  > [data-slot='conversation.session'] > * {
  flex: 1 1 0;
  min-height: 0;
  overflow: hidden;
}
body[data-march7th-skin] [data-phase='active']
  [data-slot='conversation.view'] > :has([data-chat-flow]) {
  position: relative;
  z-index: 1;
  flex: 1 1 0;
  align-self: center;
  width: min(
    var(--dsh-chat-content-width),
    calc(
      100% - var(--dsh-composer-side-clearance)
      - var(--dsh-composer-side-clearance) - 32px
    )
  );
  min-height: 0;
  overflow: hidden;
  border-radius: 0 0 var(--m7-radius) var(--m7-radius);
  /* clip-path \u540C\u65F6\u88C1\u5207\u5E26 backdrop-filter \u7684\u6D88\u606F\u5408\u6210\u5C42\uFF0C\u786E\u4FDD\u5BF9\u8BDD\u7A97\u53E3\u7684
     \u5DE6\u4E0B\u89D2\u548C\u53F3\u4E0B\u89D2\u5B9E\u9645\u663E\u793A\u4E3A\u5706\u89D2\uFF0C\u800C\u4E0D\u662F\u53EA\u8BBE\u7F6E\u4E00\u4E2A\u4E0D\u53EF\u89C1\u7684\u8FB9\u6846\u534A\u5F84\u3002 */
  clip-path: inset(
    0 0 0 0 round
    0 0 var(--m7-radius) var(--m7-radius)
  );
  /* backdrop-filter \u4E0E\u539F\u751F\u6EDA\u52A8\u6761\u4F1A\u8FDB\u5165\u72EC\u7ACB\u5408\u6210\u5C42\uFF1B\u589E\u52A0\u8499\u7248\u540E\uFF0C\u5706\u89D2\u5728
     \u5408\u6210\u5B8C\u6210\u4E4B\u540E\u7EDF\u4E00\u88C1\u5207\uFF0C\u907F\u514D\u53F3\u4E0B\u89D2\u88AB\u6EDA\u52A8\u6761\u5C42\u91CD\u65B0\u7ED8\u5236\u6210\u76F4\u89D2\u3002 */
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: linear-gradient(white, white);
}

body[data-march7th-skin] [data-phase='active'] [data-march7th-chat-scroll] {
  flex: 1 1 auto;
  width: 100%;
  min-height: 0;
  padding-right: 0;
  padding-left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  /* \u539F\u751F\u6EDA\u52A8\u6761\u4F1A\u4F5C\u4E3A\u72EC\u7ACB\u5C42\u8986\u76D6\u53F3\u4E0B\u5706\u89D2\uFF1B\u5BF9\u8BDD\u6D41\u4ECD\u53EF\u901A\u8FC7\u6EDA\u8F6E\u3001\u89E6\u63A7\u677F\u3001
     PageUp/PageDown \u4E0E\u56DE\u5230\u5E95\u90E8\u6309\u94AE\u6EDA\u52A8\uFF0C\u53EA\u9690\u85CF\u8FD9\u6761\u89C6\u89C9\u8F68\u9053\u3002 */
  scrollbar-width: none;
  border-radius: 0 0 var(--m7-radius) var(--m7-radius);
  clip-path: inset(
    0 0 0 0 round
    0 0 var(--m7-radius) var(--m7-radius)
  );
  contain: paint;
  isolation: isolate;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: linear-gradient(white, white);
  scroll-padding-bottom: 16px;
  background: transparent;
}

/* \u6D88\u606F\u5217\u94FA\u6EE1\u5706\u89D2\u7A97\u53E3\uFF0C\u7531\u7236\u7EA7\u8499\u7248\u7EDF\u4E00\u88C1\u5207\u5E95\u90E8\u4E24\u89D2\u3002\u4E0D\u80FD\u5728\u53F3\u4FA7\u9884\u7559\u6EDA\u52A8\u6761
   \u7A7A\u95F4\uFF0C\u5426\u5219\u767D\u8272\u5185\u5BB9\u5C42\u4F1A\u63D0\u524D\u7ED3\u675F\u5E76\u5728\u7A97\u53E3\u5E95\u90E8\u5F62\u6210\u4E00\u6761\u53EF\u89C1\u7684\u76F4\u89D2\u7AD6\u8FB9\u3002 */
body[data-march7th-skin] [data-march7th-chat-scroll]
  > [data-chat-flow] {
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  margin-right: 0;
  margin-left: 0;
}

body[data-march7th-skin] [data-march7th-chat-scroll]::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

/* \u8F93\u5165\u6846\u6062\u590D\u4E3A\u666E\u901A\u5E95\u90E8\u5E03\u5C40\u9879\uFF0C\u4E0D\u518D sticky \u8986\u76D6\u6D88\u606F\uFF1B\u5EA7\u4F4D\u9AD8\u5EA6\u53D8\u5316\u65F6\uFF0Cflex
   \u4F1A\u81EA\u52A8\u538B\u7F29\u6216\u6269\u5C55\u4E0A\u65B9\u7684\u6D88\u606F\u6EDA\u52A8\u533A\u3002 */
body[data-march7th-skin] [data-phase='active']
  > [data-conversation-scroll]:not([data-march7th-chat-scroll])
  > [data-composer-seat] {
  position: relative;
  bottom: auto;
  flex: none;
  margin-top: var(--m7-chat-composer-gap);
}

/* \u65B0\u6EDA\u52A8\u533A\u5DF2\u5728\u8F93\u5165\u6846\u4E0A\u65B9\uFF0C\u56E0\u6B64\u56DE\u5230\u5E95\u90E8\u6309\u94AE\u53EA\u9700\u4FDD\u7559\u81EA\u8EAB\u7684 16px \u95F4\u8DDD\u3002 */
body[data-march7th-skin] [data-march7th-chat-scroll]
  > [data-chat-flow] + * {
  bottom: 16px;
}

/* ---------- 4. \u4FA7\u8FB9\u680F\uFF1A\u5B8C\u6574\u5E95\u7EB9 + 56px \u6298\u53E0\u8F68\u9053 ---------- */
/* The slot anchor itself is display: contents, so the image must be painted on
   its first real child (the sidebar shell).  sidebar.webp is a 724 x 2171
   full-panel texture and deliberately stretches with the resizable wide rail,
   just like input.webp stretches with the composer card. */
body[data-march7th-skin] [data-slot='sidebar'] > * {
  --dsw-alias-label-primary: #d84f91;
  --dsw-alias-label-primary-inverted: #fff9fd;
  --dsw-alias-label-secondary: #b96896;
  --dsw-alias-label-tertiary: #c784a8;
  --dsw-alias-label-dimmed: #d6a8c0;
  --dsw-alias-label-caption: #b96896;
  --dsw-alias-brand-primary: #e45b9c;
  --dsw-alias-brand-text: #d84f91;
  /* Workspace rows use the business state for the active folder glyph. */
  --dsw-alias-state-business-primary: #e45b9c;
  --dsw-specific-sidebar-fill: rgba(250, 246, 255, 0.84);
  --dsw-specific-sidebar-nav-item-active: rgba(255, 232, 244, 0.78);
  --dsw-specific-sidebar-nav-item-hover: rgba(255, 255, 255, 0.58);
  --dsh-scrollbar-thumb: rgba(229, 120, 174, 0.44);
  --dsh-scrollbar-thumb-hover: rgba(211, 84, 149, 0.64);
  position: relative;
  background:
    url('/skins/march7th/sidebar.webp')
    center / 100% 100% no-repeat;
  color: var(--dsw-alias-label-primary);
  box-shadow:
    inset -1px 0 rgba(209, 124, 169, 0.24),
    8px 0 24px rgba(93, 71, 133, 0.08);
}

/* Keep the pale artwork readable even while the application uses its dark
   theme: this particular bitmap is a light skin, so the local sidebar ink
   remains dark rather than inheriting the global dark-theme labels. */
body[data-march7th-skin][data-ds-dark-theme]
  [data-slot='sidebar'] > * {
  --dsw-alias-label-primary: #d84f91;
  --dsw-alias-label-primary-inverted: #fff9fd;
  --dsw-alias-label-secondary: #b96896;
  --dsw-alias-label-tertiary: #c784a8;
  --dsw-alias-label-dimmed: #d6a8c0;
  --dsw-alias-label-caption: #b96896;
  --dsw-alias-brand-primary: #e45b9c;
  --dsw-alias-brand-text: #d84f91;
  --dsw-alias-state-business-primary: #e45b9c;
}

/* Use one coordinated sakura pink for both the wordmark and whale.  The
   primitive uses currentColor throughout; its first SVG group is the whale,
   so no asset fork or DOM replacement is required. */
body[data-march7th-skin] [data-slot='sidebar']
  > *:has(> :first-child > button + button)
  > :first-child > button:first-child {
  color: #ec5da1;
  filter: drop-shadow(0 2px 5px rgba(212, 76, 145, 0.16));
}
body[data-march7th-skin] [data-slot='sidebar']
  > *:has(> :first-child > button + button)
  > :first-child > button:first-child svg > g:first-of-type {
  color: #ec5da1;
}

/* Settings and workspace dialogs are DOM descendants of the sidebar even
   though they render as viewport overlays.  Restore regular application ink
   inside those surfaces so the pink sidebar palette does not leak into them. */
body[data-march7th-skin] [data-slot='sidebar'] [role='dialog'] {
  --dsw-alias-label-primary: #1c2b45;
  --dsw-alias-label-secondary: #52647e;
  --dsw-alias-label-tertiary: #6b7d96;
  --dsw-alias-label-dimmed: #a3b6cc;
  --dsw-alias-label-caption: #6b7d96;
  --dsw-alias-brand-primary: #4e9fdd;
  --dsw-alias-brand-text: #1f3a5f;
}
body[data-march7th-skin][data-ds-dark-theme]
  [data-slot='sidebar'] [role='dialog'] {
  --dsw-alias-label-primary: #e7f0fb;
  --dsw-alias-label-secondary: #a9bed9;
  --dsw-alias-label-tertiary: #8fa6c2;
  --dsw-alias-label-dimmed: #5f7394;
  --dsw-alias-label-caption: #8fa6c2;
  --dsw-alias-brand-primary: #7cc0f0;
  --dsw-alias-brand-text: #eaf4fe;
}

/* Expanded Settings trigger.  Its aria-haspopup/aria-expanded pair is unique
   inside the sidebar, so this does not depend on a CSS-module class name. */
body[data-march7th-skin] [data-slot='sidebar']
  button[aria-haspopup='dialog'][aria-expanded] {
  width: calc(100% + 8px);
  height: 64px;
  margin: 4px -4px 8px;
  padding: 12px 30px;
  border: 0;
  border-radius: 18px;
  background:
    url('/skins/march7th/settings.webp')
    center / 100% 100% no-repeat;
  color: #a64279;
  font-weight: 600;
  box-shadow: none;
  filter: drop-shadow(0 7px 13px rgba(126, 78, 145, 0.16));
}
body[data-march7th-skin] [data-slot='sidebar']
  button[aria-haspopup='dialog'][aria-expanded]:hover {
  background:
    url('/skins/march7th/settings.webp')
    center / 100% 100% no-repeat;
  color: #8f3268;
  filter:
    brightness(1.035)
    drop-shadow(0 8px 16px rgba(211, 84, 149, 0.22));
}

/* In the 56px rail keep the native compact Settings control.  The wide
   artwork returns only after the sidebar has expanded again. */
body[data-march7th-skin] [data-sidebar-collapsed]
  [data-slot='sidebar'] button[aria-haspopup='dialog'][aria-expanded] {
  width: 36px;
  height: 36px;
  margin: 8px 0 10px;
  padding: 0;
  border-radius: 50%;
  background: transparent;
  color: #cf5b93;
  filter: none;
}
body[data-march7th-skin] [data-sidebar-collapsed]
  [data-slot='sidebar'] button[aria-haspopup='dialog'][aria-expanded]:hover {
  background: var(--dsw-specific-sidebar-nav-item-hover);
  color: #b9447e;
  filter: none;
}

/* Expanded New Session button.  Keep the host button and its real icon/text,
   and use the transparent 2508 x 627 artwork only as its visual surface.  The
   direct-child selector is stable because the sidebar shell owns exactly this
   one button between its logo row and workspace region. */
body[data-march7th-skin] [data-slot='sidebar']
  > *:has(> :first-child > button + button) > button {
  height: 64px;
  padding: 12px 28px;
  margin: 0 0 10px;
  border: 0;
  border-radius: 18px;
  background:
    url('/skins/march7th/new%20session.webp')
    center / 100% 100% no-repeat;
  color: #a64279;
  font-weight: 600;
  box-shadow: none;
  filter: drop-shadow(0 7px 13px rgba(126, 78, 145, 0.16));
}
body[data-march7th-skin] [data-slot='sidebar']
  > *:has(> :first-child > button + button) > button:hover {
  background:
    url('/skins/march7th/new%20session.webp')
    center / 100% 100% no-repeat;
  color: #8f3268;
  filter:
    brightness(1.035)
    drop-shadow(0 8px 16px rgba(211, 84, 149, 0.22));
}

/* The layout exposes its real collapsed state on the frame.  Do not squeeze
   the ornate 724px-wide artwork into the 56px rail: retain an expanded-width
   rendering and crop its quiet centre strip instead.  The collapse animation
   therefore reads as the full panel sliding behind the rail, not as a texture
   being horizontally crushed. */
body[data-march7th-skin] [data-sidebar-collapsed]
  [data-slot='sidebar'] > * {
  background-size: 280px 100%;
  background-position: center;
  box-shadow: inset -1px 0 rgba(209, 124, 169, 0.30);
}

/* The panel toggle remains a native button, but gains a high-contrast themed
   surface so it stays obvious over both the full artwork and the cropped rail.
   Keeping the host button also preserves its tooltip, keyboard focus and
   collapse/expand behaviour. */
body[data-march7th-skin] [data-slot='sidebar'] > *
  > :first-child > button:last-of-type {
  border: 1px solid rgba(225, 113, 170, 0.42);
  background: rgba(255, 250, 253, 0.74);
  color: #cf5b93;
  box-shadow:
    0 4px 12px rgba(127, 82, 139, 0.14),
    inset 0 1px rgba(255, 255, 255, 0.82);
}
body[data-march7th-skin] [data-slot='sidebar'] > *
  > :first-child > button:last-of-type:hover {
  background: linear-gradient(145deg, #ffd3e2, #ff9fc1);
  color: #fff;
}
body[data-march7th-skin] [data-sidebar-collapsed]
  [data-slot='sidebar'] > * > :first-child > button:last-of-type {
  background: rgba(255, 250, 253, 0.90);
  box-shadow:
    0 5px 15px rgba(127, 82, 139, 0.20),
    inset 0 1px rgba(255, 255, 255, 0.90);
}

/* ---------- 4c. \u5F39\u51FA\u5C42\uFF1A\u7EDF\u4E00\u7684\u7C89\u767D / \u6DE1\u7D2B\u73BB\u7483\u4E3B\u9898 ---------- */

/* \u8F93\u5165\u6846\u4E2D\u7684\u300C\u6A21\u578B / \u63A8\u7406\u7B49\u7EA7\u300D\u83DC\u5355\u5B9E\u9645\u6E32\u67D3\u5728 composer \u5185\u90E8\uFF0C\u5E76\u975E body Portal\u3002 */
body[data-march7th-skin] [data-composer-seat]
  button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu'] {
  --dsw-specific-menu: rgba(255, 248, 253, 0.96);
  --dsw-alias-label-primary: #713254;
  --dsw-alias-label-secondary: #87506f;
  --dsw-alias-label-tertiary: #a1708c;
  --dsw-alias-label-caption: #99748b;
  --dsw-alias-border-l1: rgba(224, 104, 164, 0.46);
  --dsw-alias-border-l2: rgba(214, 115, 179, 0.34);
  --dsw-alias-interactive-bg-hover: rgba(247, 178, 216, 0.34);
  --dsw-alias-interactive-bg-selected: rgba(235, 181, 224, 0.42);
  padding: 8px;
  border: 1px solid rgba(224, 105, 165, 0.48);
  border-radius: 18px;
  background:
    radial-gradient(circle at 14% 8%, rgba(255, 255, 255, 0.96), transparent 38%),
    linear-gradient(
      145deg,
      rgba(255, 252, 255, 0.97),
      rgba(255, 230, 244, 0.94) 54%,
      rgba(232, 226, 255, 0.95)
    );
  color: #713254;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    0 16px 40px rgba(114, 55, 105, 0.24),
    0 0 0 3px rgba(255, 225, 242, 0.42);
  backdrop-filter: blur(22px) saturate(1.22);
}

body[data-march7th-skin] [data-composer-seat]
  button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu']
  :is(button[role='menuitem'], button[role='menuitemradio']) {
  min-height: 42px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: transparent;
  color: #713254;
  transition:
    color 0.16s ease,
    border-color 0.16s ease,
    background 0.16s ease,
    box-shadow 0.16s ease,
    transform 0.16s ease;
}

body[data-march7th-skin] [data-composer-seat]
  button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu']
  :is(button[role='menuitem'], button[role='menuitemradio']):is(:hover, :focus-visible),
body[data-march7th-skin] [data-composer-seat]
  button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu']
  button[role='menuitemradio'][aria-checked='true'] {
  border-color: rgba(221, 94, 157, 0.34);
  background: linear-gradient(
    100deg,
    rgba(255, 215, 236, 0.82),
    rgba(228, 220, 255, 0.74)
  );
  color: #8f315f;
  box-shadow:
    inset 3px 0 0 #e45a9d,
    inset 0 1px rgba(255, 255, 255, 0.88),
    0 4px 12px rgba(159, 70, 126, 0.12);
  outline: none;
}

body[data-march7th-skin] [data-composer-seat]
  button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu']
  :is([role='group'], [role='menuitem'], [role='menuitemradio']) svg {
  color: #cc528c;
}

body[data-march7th-skin] [data-composer-seat]
  button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu']
  [role='separator'] {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(219, 102, 161, 0.34),
    transparent
  );
}

/* Permission has no aria-expanded hook; its open menu is the access-mode
   trigger's adjacent sibling. The sidebar view menu is a body Portal and is
   uniquely identified by its two non-interactive label rows. */
body[data-march7th-skin] [data-composer-seat]
  button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
body[data-march7th-skin] [data-composer-seat]
  button[aria-label^='Access mode'] + [role='menu'],
body[data-march7th-skin] > [role='menu']:has(
  > [role='presentation'] > [role='presentation']
) {
  --dsw-specific-menu: rgba(255, 248, 253, 0.96);
  --dsw-alias-label-primary: #713254;
  --dsw-alias-label-secondary: #87506f;
  --dsw-alias-label-tertiary: #a1708c;
  --dsw-alias-label-caption: #99748b;
  --dsw-alias-border-l1: rgba(224, 104, 164, 0.46);
  --dsw-alias-border-l2: rgba(214, 115, 179, 0.34);
  --dsw-alias-interactive-bg-hover: rgba(247, 178, 216, 0.34);
  --dsw-alias-interactive-bg-selected: rgba(235, 181, 224, 0.42);
  padding: 8px;
  border: 1px solid rgba(224, 105, 165, 0.52);
  border-radius: 18px;
  background:
    radial-gradient(circle at 14% 8%, rgba(255, 255, 255, 0.98), transparent 38%),
    linear-gradient(
      145deg,
      rgba(255, 252, 255, 0.97),
      rgba(255, 230, 244, 0.95) 54%,
      rgba(232, 226, 255, 0.96)
    );
  color: #713254;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.98),
    0 16px 40px rgba(114, 55, 105, 0.24),
    0 0 0 3px rgba(255, 225, 242, 0.42);
  backdrop-filter: blur(22px) saturate(1.22);
}

body[data-march7th-skin] [data-composer-seat]
  button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
body[data-march7th-skin] [data-composer-seat]
  button[aria-label^='Access mode'] + [role='menu'] {
  min-width: 250px;
}

body[data-march7th-skin] > [role='menu']:has(
  > [role='presentation'] > [role='presentation']
) {
  min-width: 246px;
}

:is(
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='Access mode'] + [role='menu'],
  body[data-march7th-skin] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) button[role='menuitem'] {
  min-height: 42px;
  border: 1px solid transparent;
  border-radius: 12px;
  background: transparent;
  color: #713254;
  transition:
    color 0.16s ease,
    border-color 0.16s ease,
    background 0.16s ease,
    box-shadow 0.16s ease,
    transform 0.16s ease;
}

:is(
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='Access mode'] + [role='menu'],
  body[data-march7th-skin] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) button[role='menuitem']:is(:hover, :focus-visible),
:is(
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='Access mode'] + [role='menu'],
  body[data-march7th-skin] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) button[role='menuitem']:has(> svg:last-child) {
  border-color: rgba(221, 94, 157, 0.34);
  background: linear-gradient(
    100deg,
    rgba(255, 215, 236, 0.82),
    rgba(228, 220, 255, 0.74)
  );
  color: #8f315f;
  box-shadow:
    inset 3px 0 0 #e45a9d,
    inset 0 1px rgba(255, 255, 255, 0.88),
    0 4px 12px rgba(159, 70, 126, 0.12);
  outline: none;
}

:is(
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='\u8BBF\u95EE\u6A21\u5F0F'] + [role='menu'],
  body[data-march7th-skin] [data-composer-seat]
    button[aria-label^='Access mode'] + [role='menu'],
  body[data-march7th-skin] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) button[role='menuitem'] svg {
  color: #cc528c;
}

body[data-march7th-skin] > [role='menu']:has(
  > [role='presentation'] > [role='presentation']
) > [role='presentation'] > [role='presentation'] {
  padding: 8px 10px 4px;
  color: #ad6b90;
  font-weight: 650;
  letter-spacing: 0.02em;
}

body[data-march7th-skin] > [role='menu']:has(
  > [role='presentation'] > [role='presentation']
) [role='separator'] {
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(219, 102, 161, 0.38),
    transparent
  );
}

/* \u8BBE\u7F6E\u4E2D\u5FC3\uFF1A\u53EA\u547D\u4E2D sidebar Portal \u4E2D\u5E26\u5BFC\u822A\u680F\u7684 modal dialog\u3002 */
body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) {
  --dsw-alias-bg-base: rgba(255, 248, 253, 0.96);
  --dsw-alias-bg-elevated: rgba(255, 252, 255, 0.92);
  --dsw-alias-label-primary: #6f3153;
  --dsw-alias-label-secondary: #87506f;
  --dsw-alias-label-tertiary: #9f718c;
  --dsw-alias-label-caption: #977188;
  --dsw-alias-border-l1: rgba(222, 102, 161, 0.46);
  --dsw-alias-border-l2: rgba(213, 116, 179, 0.34);
  --dsw-alias-brand-primary: #dc5596;
  --dsw-alias-brand-text: #8f315f;
  border: 1px solid rgba(224, 105, 165, 0.48);
  background:
    radial-gradient(circle at 10% 8%, rgba(255, 255, 255, 0.98), transparent 34%),
    radial-gradient(circle at 92% 14%, rgba(222, 217, 255, 0.58), transparent 38%),
    linear-gradient(
      145deg,
      rgba(255, 252, 255, 0.97),
      rgba(255, 232, 246, 0.95) 56%,
      rgba(235, 230, 255, 0.96)
    );
  color: #6f3153;
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.98),
    0 28px 80px rgba(73, 45, 92, 0.34),
    0 0 0 4px rgba(255, 221, 240, 0.32);
  backdrop-filter: blur(24px) saturate(1.18);
}

body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav {
  border-right: 1px solid rgba(218, 105, 163, 0.28);
  background:
    linear-gradient(180deg, rgba(255, 238, 248, 0.78), rgba(239, 230, 255, 0.68));
  box-shadow: inset -1px 0 rgba(255, 255, 255, 0.72);
}

body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav button {
  border: 1px solid transparent;
  border-radius: 13px;
  color: #824061;
  transition:
    color 0.16s ease,
    border-color 0.16s ease,
    background 0.16s ease,
    box-shadow 0.16s ease;
}

body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav button:is(:hover, :focus-visible),
body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav button[aria-current='true'] {
  border-color: rgba(220, 92, 157, 0.32);
  background: linear-gradient(100deg, rgba(255, 214, 235, 0.82), rgba(230, 222, 255, 0.72));
  color: #943663;
  box-shadow:
    inset 3px 0 #df5798,
    inset 0 1px rgba(255, 255, 255, 0.92),
    0 5px 14px rgba(150, 67, 120, 0.12);
  outline: none;
}

body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav + div {
  background: rgba(255, 255, 255, 0.14);
}

body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav)
  :is(button[aria-haspopup], input, select, textarea, [role='radio']) {
  border-color: rgba(217, 108, 162, 0.34);
  background: rgba(255, 252, 255, 0.66);
  color: #713254;
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.88);
}

body[data-march7th-skin] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) input[type='range'] {
  accent-color: #dd5798;
}

/* \u4F1A\u8BDD\u7BA1\u7406\uFF1A\u63D2\u4EF6\u63D0\u4F9B\u7A33\u5B9A\u7684 drawer \u6807\u8BC6\uFF0C\u907F\u514D\u5F71\u54CD\u5176\u4ED6\u53F3\u4FA7\u9762\u677F\u3002 */
body[data-march7th-skin] [data-dsh-drawer-backdrop] {
  background: rgba(69, 45, 83, 0.34);
  backdrop-filter: blur(5px) saturate(0.92);
}

body[data-march7th-skin] [data-dsh-drawer] {
  --dsw-alias-bg-base: rgba(255, 248, 253, 0.97);
  --dsw-alias-label-primary: #6f3153;
  --dsw-alias-label-secondary: #87506f;
  --dsw-alias-label-tertiary: #9f718c;
  --dsw-alias-border-l1: rgba(222, 102, 161, 0.44);
  border-left: 1px solid rgba(223, 104, 164, 0.48);
  background:
    radial-gradient(circle at 92% 5%, rgba(226, 219, 255, 0.62), transparent 34%),
    linear-gradient(160deg, rgba(255, 252, 255, 0.98), rgba(255, 232, 246, 0.96) 58%, rgba(237, 231, 255, 0.96));
  color: #6f3153;
  box-shadow:
    -24px 0 64px rgba(64, 43, 79, 0.28),
    inset 1px 0 rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px) saturate(1.16);
}

body[data-march7th-skin] [data-dsh-drawer] .dsh-drawer__header {
  border-bottom-color: rgba(218, 105, 163, 0.28);
  background: rgba(255, 245, 251, 0.42);
  box-shadow: inset 0 -1px rgba(255, 255, 255, 0.76);
}

body[data-march7th-skin] [data-dsh-drawer]
  :is(.dsh-drawer__title, .dsh-delete-session__group-title, .dsh-delete-session__title) {
  color: #87395f;
  font-weight: 750;
}

body[data-march7th-skin] [data-dsh-drawer] .dsh-delete-session__group {
  border-top-color: rgba(216, 112, 164, 0.24);
}

body[data-march7th-skin] [data-dsh-drawer] .dsh-delete-session__row {
  border-color: rgba(218, 112, 166, 0.32);
  background: linear-gradient(110deg, rgba(255, 254, 255, 0.72), rgba(242, 232, 255, 0.56));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.9),
    0 5px 14px rgba(143, 65, 116, 0.08);
}

body[data-march7th-skin] [data-dsh-drawer] .dsh-delete-session__row:hover {
  border-color: rgba(218, 83, 151, 0.46);
  background: linear-gradient(110deg, rgba(255, 226, 241, 0.82), rgba(232, 224, 255, 0.72));
}

body[data-march7th-skin] [data-dsh-drawer] button {
  border-color: rgba(215, 105, 161, 0.34);
  color: #7d3b5d;
}

body[data-march7th-skin] [data-dsh-drawer] button:is(:hover, :focus-visible) {
  border-color: rgba(218, 79, 149, 0.48);
  background: rgba(255, 221, 239, 0.72);
  color: #9b3567;
  outline: none;
}

body[data-march7th-skin] [data-dsh-drawer] .dsh-delete-session__more-menu {
  border-color: rgba(221, 103, 162, 0.42);
  border-radius: 14px;
  background: linear-gradient(145deg, rgba(255, 252, 255, 0.98), rgba(240, 231, 255, 0.96));
  box-shadow: 0 14px 34px rgba(102, 54, 98, 0.22);
  backdrop-filter: blur(18px);
}

/* ---------- 4d. \u6DF1\u8272\u4E3B\u9898\uFF1A\u5348\u591C\u661F\u7A7A + \u51B0\u6676\u84DD + \u6A31\u82B1\u7C89 ----------
   \u6D45\u8272\u7D20\u6750\uFF08\u4FA7\u680F\u3001\u9875\u5934\u548C\u8F93\u5165\u753B\u6846\uFF09\u4FDD\u7559\u539F\u753B\uFF1B\u6240\u6709\u771F\u6B63\u7684\u5E94\u7528\u8868\u9762\u4F7F\u7528\u7EDF\u4E00\u7684
   \u5348\u591C\u84DD\u7D2B\u5C42\u7EA7\u3002\u8FD9\u6837\u4E0D\u4F1A\u628A\u6DF1\u8272\u6A21\u5F0F\u505A\u6210\u7B80\u5355\u7684\u7070\u9ED1\u53CD\u76F8\uFF0C\u4E5F\u907F\u514D\u8BBE\u7F6E\u4E2D\u5FC3\u548C
   Portal \u83DC\u5355\u7EE7\u7EED\u6CBF\u7528\u4E0A\u9762\u7684\u6D45\u7C89\u73BB\u7483\u786C\u7F16\u7801\u3002 */
body[data-march7th-skin][data-ds-dark-theme] {
  --m7-night-0: #0b1020;
  --m7-night-1: #11182b;
  --m7-night-2: #171f36;
  --m7-night-3: #202a46;
  --m7-night-overlay: #293553;
  --m7-night-ink: #f7f2ff;
  --m7-night-secondary: #c9c2dc;
  --m7-night-muted: #9f98b8;
  --m7-night-pink: #ff8fbd;
  --m7-night-pink-strong: #ea6da8;
  --m7-night-ice: #8dd7ff;
  --m7-night-lavender: #bca7ff;
  color-scheme: dark;
  background:
    radial-gradient(960px 520px at 86% -12%, rgba(111, 167, 255, 0.16), transparent 62%),
    radial-gradient(820px 520px at -8% 108%, rgba(255, 111, 173, 0.12), transparent 58%),
    var(--m7-night-0);
}

body[data-march7th-skin][data-ds-dark-theme] [data-conversation-scroll] {
  background:
    radial-gradient(900px 460px at 82% 4%, rgba(110, 123, 211, 0.08), transparent 62%),
    linear-gradient(180deg, rgba(7, 11, 25, 0.22), rgba(9, 13, 29, 0.52)),
    url('/skins/march7th/background.webp') center / cover no-repeat,
    var(--m7-night-0);
}

body[data-march7th-skin][data-ds-dark-theme] [data-chat-flow-key] {
  background: linear-gradient(145deg, rgba(19, 27, 48, 0.82), rgba(31, 37, 65, 0.72));
  border-color: rgba(166, 193, 236, 0.16);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.035),
    0 12px 34px rgba(3, 6, 17, 0.34);
  backdrop-filter: blur(12px) saturate(1.08);
}

body[data-march7th-skin][data-ds-dark-theme] [data-chat-flow-key]:hover {
  background: linear-gradient(145deg, rgba(23, 33, 57, 0.9), rgba(37, 43, 74, 0.82));
  border-color: rgba(141, 215, 255, 0.24);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.05),
    0 14px 38px rgba(3, 6, 17, 0.4);
}

/* Trajectory \u9875\u81EA\u8EAB\u7684 token \u5DF2\u662F\u6DF1\u8272\uFF0C\u4F46\u540E\u7F6E\u7684\u5DE5\u5177\u680F\u89C4\u5219\u4ECD\u4E3A\u6D45\u8272\uFF1B\u5728\u8FD9\u91CC
   \u5B8C\u6210\u95ED\u73AF\uFF0C\u4FDD\u8BC1\u641C\u7D22\u6846\u3001\u6807\u9898\u548C\u5DF2\u9009\u6309\u94AE\u90FD\u5C5E\u4E8E\u540C\u4E00\u591C\u8272\u5C42\u7EA7\u3002 */
body[data-march7th-skin][data-ds-dark-theme]
  [data-conversation-composer-overlay] {
  --dsw-alias-bg-base: rgba(11, 16, 32, 0.66);
  --dsw-alias-bg-layer-1: rgba(17, 24, 43, 0.78);
  --dsw-alias-bg-layer-2: rgba(23, 31, 54, 0.76);
  --dsw-alias-bg-layer-3: rgba(32, 42, 70, 0.78);
  --dsw-alias-bg-overlay: rgba(41, 53, 83, 0.84);
  --dsw-alias-bg-module-platform: rgba(28, 37, 63, 0.8);
  --dsw-specific-sidebar-fill: rgba(20, 27, 48, 0.84);
  --dsw-alias-border-l1: rgba(164, 190, 235, 0.14);
  --dsw-alias-border-l2: rgba(180, 198, 239, 0.22);
  --dsw-alias-border-l3: rgba(195, 207, 242, 0.3);
  --dsw-alias-label-primary: var(--m7-night-ink);
  --dsw-alias-label-secondary: var(--m7-night-secondary);
  --dsw-alias-label-tertiary: var(--m7-night-muted);
  --dsw-alias-label-caption: #aaa2c1;
  --dsw-alias-state-business-primary: var(--m7-night-pink);
  background: rgba(10, 15, 31, 0.68);
  backdrop-filter: blur(12px) saturate(1.06);
}

body[data-march7th-skin][data-ds-dark-theme]
  [data-conversation-composer-overlay] [role='toolbar'] {
  border-bottom-color: rgba(255, 143, 189, 0.18);
  background: linear-gradient(90deg, rgba(17, 24, 43, 0.82), rgba(28, 31, 57, 0.76));
  box-shadow: 0 5px 18px rgba(2, 5, 15, 0.22);
}

body[data-march7th-skin][data-ds-dark-theme]
  [data-conversation-composer-overlay] [role='toolbar'] button {
  color: var(--m7-night-secondary);
}

body[data-march7th-skin][data-ds-dark-theme]
  [data-conversation-composer-overlay]
  [role='toolbar'] button:is(:hover, [aria-pressed='true']) {
  color: #ffe2ef;
  background: rgba(255, 143, 189, 0.14);
}

body[data-march7th-skin][data-ds-dark-theme]
  [data-conversation-composer-overlay]
  [role='toolbar'] :has(> input[type='search']) {
  border-color: rgba(180, 198, 239, 0.22);
  background: rgba(13, 19, 36, 0.74);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.04);
}

body[data-march7th-skin][data-ds-dark-theme]
  [data-conversation-composer-overlay]
  :is(h1, h2, h3, h4, [role='heading'], th) {
  color: #f7eafa;
  text-shadow: 0 1px 10px rgba(188, 167, 255, 0.12);
}

/* \u6DF1\u8272\u5F39\u51FA\u83DC\u5355\u3002\u8986\u76D6 hero\u3001composer\u3001\u8BBE\u7F6E\u4E2D\u5FC3 Portal \u4E0E\u4FA7\u680F\u89C6\u56FE\u83DC\u5355\uFF0C
   \u5E76\u8BA9\u5D4C\u5957\u83DC\u5355\u7EE7\u627F\u76F8\u540C\u8868\u9762\uFF0C\u907F\u514D\u51FA\u73B0\u4E00\u5C42\u6DF1\u3001\u4E00\u5C42\u6D45\u7684\u65AD\u88C2\u3002 */
:is(
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-slot='sidebar'] [role='dialog'][aria-modal='true']:has(> nav)
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-label^='Access mode'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) {
  --dsw-specific-menu: rgba(18, 24, 44, 0.96);
  --dsw-alias-label-primary: var(--m7-night-ink);
  --dsw-alias-label-secondary: var(--m7-night-secondary);
  --dsw-alias-label-tertiary: var(--m7-night-muted);
  --dsw-alias-label-caption: #aaa2c1;
  --dsw-alias-border-l1: rgba(164, 190, 235, 0.18);
  --dsw-alias-border-l2: rgba(180, 198, 239, 0.24);
  --dsw-alias-interactive-bg-hover: rgba(141, 215, 255, 0.1);
  --dsw-alias-interactive-bg-selected: rgba(255, 143, 189, 0.16);
  border-color: rgba(188, 167, 255, 0.3);
  background:
    radial-gradient(circle at 12% 4%, rgba(141, 215, 255, 0.1), transparent 38%),
    radial-gradient(circle at 92% 100%, rgba(255, 111, 173, 0.09), transparent 42%),
    linear-gradient(145deg, rgba(16, 23, 42, 0.98), rgba(28, 31, 56, 0.97));
  color: var(--m7-night-ink);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.055),
    0 18px 46px rgba(2, 5, 15, 0.52),
    0 0 0 3px rgba(116, 105, 183, 0.1);
  backdrop-filter: blur(24px) saturate(1.14);
}

body[data-march7th-skin][data-ds-dark-theme]:has(
  [data-phase='hero'] [data-composer-seat]
    button[aria-haspopup='menu'][aria-expanded='true']
) > [role='menu'] [role='menu'] {
  --dsw-specific-menu: rgba(18, 24, 44, 0.97);
  border-color: rgba(188, 167, 255, 0.28);
  background: linear-gradient(145deg, rgba(16, 23, 42, 0.98), rgba(28, 31, 56, 0.97));
  color: var(--m7-night-ink);
  box-shadow: 0 18px 46px rgba(2, 5, 15, 0.52);
}

:is(
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-slot='sidebar'] [role='dialog'][aria-modal='true']:has(> nav)
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-label^='Access mode'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) :is(button[role='menuitem'], button[role='menuitemradio']) {
  border-color: transparent;
  background: transparent;
  color: var(--m7-night-secondary);
  box-shadow: none;
}

:is(
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-slot='sidebar'] [role='dialog'][aria-modal='true']:has(> nav)
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-label^='\\8BBF\\95EE\\6A21\\5F0F'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-label^='Access mode'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) :is(
  button[role='menuitem']:hover,
  button[role='menuitem']:focus-visible,
  button[role='menuitem']:has(> svg:last-child),
  button[role='menuitemradio']:hover,
  button[role='menuitemradio']:focus-visible,
  button[role='menuitemradio'][aria-checked='true']
) {
  border-color: rgba(255, 143, 189, 0.28);
  background: linear-gradient(100deg, rgba(255, 111, 173, 0.16), rgba(148, 125, 235, 0.14));
  color: #ffe2ef;
  box-shadow:
    inset 3px 0 var(--m7-night-pink-strong),
    inset 0 1px rgba(255, 255, 255, 0.045),
    0 5px 16px rgba(2, 5, 15, 0.2);
  transform: none;
}

:is(
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-slot='sidebar'] [role='dialog'][aria-modal='true']:has(> nav)
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) button :is(span, svg) {
  color: inherit;
  filter: none;
}

:is(
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-phase='hero'] [data-composer-seat]
      button[aria-haspopup='menu'][aria-expanded='true']
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme]:has(
    [data-slot='sidebar'] [role='dialog'][aria-modal='true']:has(> nav)
  ) > [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] [data-composer-seat]
    button[aria-haspopup='menu'][aria-expanded='true'] + [role='menu'],
  body[data-march7th-skin][data-ds-dark-theme] > [role='menu']:has(
    > [role='presentation'] > [role='presentation']
  )
) [role='separator'] {
  background: linear-gradient(90deg, transparent, rgba(188, 167, 255, 0.28), transparent);
}

/* \u8BBE\u7F6E\u4E2D\u5FC3\uFF1A\u80CC\u666F\u906E\u7F69\u964D\u4F4E\u753B\u9762\u5E72\u6270\uFF0C\u9762\u677F\u901A\u8FC7\u76F8\u90BB\u7684\u84DD\u7D2B\u660E\u5EA6\u800C\u975E\u767D\u8272\u5206\u9694\u7EBF
   \u5EFA\u7ACB\u5C42\u7EA7\uFF1B\u6A31\u82B1\u7C89\u53EA\u7528\u4E8E\u5F53\u524D\u9879\u548C\u4E3B\u8981\u4EA4\u4E92\uFF0C\u907F\u514D\u6574\u5C4F\u504F\u7EA2\u3002 */
body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='presentation']:has(> [aria-hidden='true'] + [role='dialog'])
  > [aria-hidden='true'] {
  background: rgba(5, 8, 20, 0.72);
  backdrop-filter: blur(10px) saturate(0.72);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) {
  --dsw-alias-bg-base: rgba(11, 16, 32, 0.98);
  --dsw-alias-bg-elevated: rgba(24, 31, 54, 0.96);
  --dsw-alias-bg-layer-1: #11182b;
  --dsw-alias-bg-layer-2: #171f36;
  --dsw-alias-bg-layer-3: #202a46;
  --dsw-alias-bg-overlay: #293553;
  --dsw-alias-bg-module-platform: #202a46;
  --dsw-alias-label-primary: var(--m7-night-ink);
  --dsw-alias-label-secondary: var(--m7-night-secondary);
  --dsw-alias-label-tertiary: var(--m7-night-muted);
  --dsw-alias-label-dimmed: #716b8a;
  --dsw-alias-label-caption: #aaa2c1;
  --dsw-alias-border-l1: rgba(164, 190, 235, 0.14);
  --dsw-alias-border-l2: rgba(180, 198, 239, 0.22);
  --dsw-alias-brand-primary: var(--m7-night-pink);
  --dsw-alias-brand-text: #ffd9e9;
  --dsw-specific-sidebar-nav-item-active: rgba(255, 111, 173, 0.16);
  --dsw-specific-sidebar-nav-item-hover: rgba(141, 215, 255, 0.09);
  border-color: rgba(188, 167, 255, 0.34);
  background:
    radial-gradient(circle at 92% 8%, rgba(127, 111, 207, 0.16), transparent 38%),
    radial-gradient(circle at 8% 92%, rgba(255, 111, 173, 0.08), transparent 34%),
    linear-gradient(145deg, rgba(13, 19, 36, 0.99), rgba(24, 29, 52, 0.985));
  color: var(--m7-night-ink);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.055),
    0 30px 90px rgba(2, 4, 14, 0.58),
    0 0 0 4px rgba(96, 84, 158, 0.13);
  backdrop-filter: blur(28px) saturate(1.08);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav {
  border-right-color: rgba(188, 167, 255, 0.16);
  background:
    radial-gradient(circle at 18% 4%, rgba(141, 215, 255, 0.075), transparent 32%),
    linear-gradient(180deg, rgba(13, 20, 38, 0.94), rgba(18, 22, 42, 0.86));
  box-shadow: inset -1px 0 rgba(255, 255, 255, 0.025);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav button {
  color: var(--m7-night-secondary);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav button:is(:hover, :focus-visible) {
  border-color: rgba(141, 215, 255, 0.16);
  background: rgba(141, 215, 255, 0.075);
  color: var(--m7-night-ink);
  box-shadow: inset 3px 0 var(--m7-night-ice);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav button[aria-current='true'] {
  border-color: rgba(255, 143, 189, 0.28);
  background: linear-gradient(100deg, rgba(255, 111, 173, 0.18), rgba(148, 125, 235, 0.15));
  color: #ffe3ef;
  box-shadow:
    inset 3px 0 var(--m7-night-pink-strong),
    inset 0 1px rgba(255, 255, 255, 0.04),
    0 6px 18px rgba(3, 6, 17, 0.2);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) > nav + div {
  background: rgba(9, 14, 29, 0.12);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav)
  :is(button[aria-haspopup], input, select, textarea, [role='radio'], button[aria-pressed]) {
  border-color: rgba(180, 198, 239, 0.2);
  background: rgba(18, 25, 45, 0.74);
  color: var(--m7-night-ink);
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.045),
    0 5px 16px rgba(2, 5, 15, 0.12);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav)
  :is(button[aria-haspopup], input, select, textarea, [role='radio'], button[aria-pressed]):is(:hover, :focus-visible) {
  border-color: rgba(141, 215, 255, 0.34);
  background: rgba(31, 41, 68, 0.82);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav)
  :is([role='radio'][aria-checked='true'], button[aria-pressed='true']) {
  border-color: rgba(255, 143, 189, 0.5);
  background:
    radial-gradient(circle at 50% 0, rgba(188, 167, 255, 0.17), transparent 66%),
    linear-gradient(145deg, rgba(38, 34, 65, 0.96), rgba(31, 39, 66, 0.96));
  color: #ffe2ef;
  box-shadow:
    inset 0 0 0 1px rgba(255, 143, 189, 0.08),
    inset 0 1px rgba(255, 255, 255, 0.055),
    0 8px 22px rgba(2, 5, 15, 0.24);
}

body[data-march7th-skin][data-ds-dark-theme] [data-slot='sidebar']
  [role='dialog'][aria-modal='true']:has(> nav) input[type='range'] {
  accent-color: var(--m7-night-pink-strong);
}

/* \u4F1A\u8BDD\u7BA1\u7406\u62BD\u5C49\u6CBF\u7528\u8BBE\u7F6E\u4E2D\u5FC3\u7684\u591C\u8272\u8868\u9762\uFF0C\u5371\u9669\u64CD\u4F5C\u4ECD\u7531\u5BBF\u4E3B error token \u4FDD\u6301
   \u7EA2\u8272\u8BED\u4E49\uFF0C\u4E0D\u628A\u6240\u6709\u6309\u94AE\u90FD\u67D3\u6210\u5F3A\u8C03\u8272\u3002 */
body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer-backdrop] {
  background: rgba(4, 7, 18, 0.66);
  backdrop-filter: blur(8px) saturate(0.74);
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] {
  --dsw-alias-bg-base: rgba(11, 16, 32, 0.98);
  --dsw-alias-bg-layer-1: #11182b;
  --dsw-alias-bg-layer-2: #171f36;
  --dsw-alias-bg-layer-3: #202a46;
  --dsw-alias-label-primary: var(--m7-night-ink);
  --dsw-alias-label-secondary: var(--m7-night-secondary);
  --dsw-alias-label-tertiary: var(--m7-night-muted);
  --dsw-alias-border-l1: rgba(164, 190, 235, 0.16);
  border-left-color: rgba(188, 167, 255, 0.3);
  background:
    radial-gradient(circle at 92% 4%, rgba(127, 111, 207, 0.16), transparent 34%),
    radial-gradient(circle at 6% 94%, rgba(255, 111, 173, 0.08), transparent 34%),
    linear-gradient(160deg, rgba(13, 19, 36, 0.99), rgba(24, 29, 52, 0.985));
  color: var(--m7-night-ink);
  box-shadow:
    -28px 0 72px rgba(2, 4, 14, 0.5),
    inset 1px 0 rgba(255, 255, 255, 0.04);
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] .dsh-drawer__header {
  border-bottom-color: rgba(188, 167, 255, 0.16);
  background: rgba(13, 20, 38, 0.56);
  box-shadow: inset 0 -1px rgba(255, 255, 255, 0.025);
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer]
  :is(.dsh-drawer__title, .dsh-delete-session__group-title, .dsh-delete-session__title) {
  color: #f7eafa;
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] .dsh-delete-session__group {
  border-top-color: rgba(180, 198, 239, 0.14);
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] .dsh-delete-session__row {
  border-color: rgba(180, 198, 239, 0.18);
  background: linear-gradient(110deg, rgba(17, 24, 43, 0.82), rgba(31, 37, 64, 0.7));
  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.035),
    0 6px 18px rgba(2, 5, 15, 0.18);
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] .dsh-delete-session__row:hover {
  border-color: rgba(255, 143, 189, 0.3);
  background: linear-gradient(110deg, rgba(45, 30, 58, 0.86), rgba(34, 40, 70, 0.82));
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] button {
  border-color: rgba(180, 198, 239, 0.2);
  color: var(--m7-night-secondary);
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] button:is(:hover, :focus-visible) {
  border-color: rgba(255, 143, 189, 0.32);
  background: rgba(255, 111, 173, 0.12);
  color: #ffe2ef;
}

body[data-march7th-skin][data-ds-dark-theme] [data-dsh-drawer] .dsh-delete-session__more-menu {
  border-color: rgba(188, 167, 255, 0.28);
  background: linear-gradient(145deg, rgba(16, 23, 42, 0.98), rgba(28, 31, 56, 0.97));
  box-shadow: 0 18px 44px rgba(2, 5, 15, 0.48);
}

/* ---------- 5. \u6EDA\u52A8\u6761\uFF1A\u5706\u89D2\u51B0\u84DD\uFF08WebKit \u8DEF\u5F84\uFF1B\u6807\u51C6\u5C5E\u6027\u8DEF\u5F84\u7531 token \u5C42\u8D1F\u8D23\uFF09 ---------- */
body[data-march7th-skin] ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
body[data-march7th-skin] ::-webkit-scrollbar-track {
  background: transparent;
}
body[data-march7th-skin] ::-webkit-scrollbar-thumb {
  background: var(--dsw-alias-scrollbar-bg-l1);
  border-radius: 8px;
  border: 2px solid transparent;
  background-clip: padding-box;
}
body[data-march7th-skin] ::-webkit-scrollbar-thumb:hover {
  background: var(--dsw-alias-scrollbar-hover-l1);
  border: 2px solid transparent;
  background-clip: padding-box;
}

/* ---------- 6. \u9009\u533A / \u7126\u70B9 ---------- */
body[data-march7th-skin] ::selection {
  background: rgba(255, 143, 171, 0.30);
}
body[data-march7th-skin] :focus-visible {
  outline-color: var(--m7-ice-deep);
  outline-offset: 2px;
}

/* ---------- 7. \u7A7A\u72B6\u6001\uFF08hero\uFF09\u88C5\u9970\uFF1A\u4E00\u53E5\u6765\u81EA\u4E09\u6708\u4E03\u7684\u8BDD ----------
   \u5C45\u4E2D\u653E\u5728\u4E2D\u592E\u5B89\u5168\u533A\u5185\uFF08\u6A2A\u5411 31%~59%\uFF09\uFF0C\u907F\u514D\u4E0E\u4E24\u4FA7\u7ACB\u7ED8\u91CD\u53E0\u3002
   \u6302\u5728\u6EDA\u52A8\u533A\u4E0A\uFF1A\u6839\u5BB9\u5668\u7684 ::after \u5DF2\u88AB\u53F3\u4FA7\u4EBA\u7269\u5360\u7528\u3002 */
body[data-march7th-skin] [data-phase='hero'] [data-conversation-scroll]::after {
  content: '\u2744 \u613F\u65F6\u5149\u5B9A\u683C\uFF0C\u56DE\u5FC6\u6C38\u5B58 \u2014\u2014 \u4E09\u6708\u4E03';
  position: fixed;
  left: 50%;
  bottom: 150px;
  transform: translateX(-50%);
  font-size: 13px;
  letter-spacing: 1px;
  color: rgba(78, 159, 221, 0.55);
  pointer-events: none;
  user-select: none;
}
body[data-march7th-skin][data-ds-dark-theme] [data-phase='hero'] [data-conversation-scroll]::after {
  color: rgba(124, 192, 240, 0.5);
}

/* ---------- 8. \u52A8\u6548\uFF1A\u4EC5\u5728\u7528\u6237\u4E0D\u8981\u6C42\u51CF\u5C11\u52A8\u6548\u65F6\u542F\u7528 ---------- */
@media (prefers-reduced-motion: no-preference) {
  body[data-march7th-skin] [data-phase='hero'] [data-conversation-scroll]::after {
    animation: m7-float 6s ease-in-out infinite;
  }
}
@keyframes m7-float {
  0%, 100% { transform: translate(-50%, 0); }
  50% { transform: translate(-50%, -6px); }
}
@media (prefers-reduced-motion: reduce) {
  body[data-march7th-skin] [data-chat-flow-key] {
    transition: none;
  }
}
`;

// src/client/index.ts
var LAYER = "march7th-skin";
var BODY_ATTR = "data-march7th-skin";
var CHAT_SCROLL_ATTR = "data-march7th-chat-scroll";
var TOKENS = {
  "--dsw-alias-bg-base": { light: "#f3f8fd", dark: "#0b1020" },
  "--dsw-alias-bg-layer-1": { light: "#f8fbfe", dark: "#11182b" },
  "--dsw-alias-bg-layer-2": { light: "#edf4fb", dark: "#171f36" },
  "--dsw-alias-bg-layer-3": { light: "#e3eef8", dark: "#202a46" },
  "--dsw-alias-bg-overlay": { light: "#dbe9f6", dark: "#293553" },
  "--dsw-alias-bg-module-platform": { light: "#f1f6fb", dark: "#202a46" },
  "--dsw-alias-bg-mask-1": { light: "rgba(23,35,58,0.28)", dark: "rgba(4,7,18,0.66)" },
  "--dsw-alias-bg-skeleton": { light: "rgba(78,159,221,0.10)", dark: "rgba(141,215,255,0.10)" },
  "--dsw-alias-border-l1": { light: "rgba(88,140,190,0.16)", dark: "rgba(164,190,235,0.14)" },
  "--dsw-alias-border-l2": { light: "rgba(88,140,190,0.26)", dark: "rgba(180,198,239,0.22)" },
  "--dsw-alias-border-l3": { light: "rgba(88,140,190,0.36)", dark: "rgba(195,207,242,0.30)" },
  "--dsw-alias-border-l4": { light: "rgba(88,140,190,0.46)", dark: "rgba(211,217,246,0.38)" },
  "--dsw-alias-brand-primary": { light: "#4e9fdd", dark: "#ff8fbd" },
  "--dsw-alias-brand-text": { light: "#1f3a5f", dark: "#ffd9e9" },
  "--dsw-alias-label-primary": { light: "#1c2b45", dark: "#f7f2ff" },
  "--dsw-alias-label-secondary": { light: "#52647e", dark: "#c9c2dc" },
  "--dsw-alias-label-tertiary": { light: "#6b7d96", dark: "#9f98b8" },
  "--dsw-alias-label-dimmed": { light: "#a3b6cc", dark: "#716b8a" },
  "--dsw-alias-label-caption": { light: "#6b7d96", dark: "#aaa2c1" },
  "--dsw-alias-button-primary-fill": { light: "#4e9fdd", dark: "#ea6da8" },
  "--dsw-alias-button-primary-hover": { light: "#3d8cc7", dark: "#f481b5" },
  "--dsw-alias-button-elevated-fill": { light: "#ffffff", dark: "#1b243d" },
  "--dsw-alias-button-floating-fill": { light: "rgba(255,255,255,0.92)", dark: "rgba(23,31,54,0.92)" },
  "--dsw-alias-button-floating-hover": { light: "#eaf3fc", dark: "#273250" },
  "--dsw-alias-button-ghost-active-fill": { light: "#e0edf9", dark: "#252f4d" },
  "--dsw-alias-button-ghost-active-hover": { light: "#d6e7f6", dark: "#2d3959" },
  "--dsw-alias-button-info-fill": { light: "#4e9fdd", dark: "#e96ba6" },
  "--dsw-alias-button-info-hover": { light: "#6fb2e6", dark: "#f583b7" },
  "--dsw-alias-interactive-bg-hover": { light: "rgba(78,159,221,0.10)", dark: "rgba(141,215,255,0.10)" },
  "--dsw-alias-interactive-bg-active": { light: "rgba(78,159,221,0.16)", dark: "rgba(255,143,189,0.16)" },
  "--dsw-alias-interactive-bg-hover-accent": { light: "rgba(255,143,171,0.18)", dark: "rgba(255,143,189,0.18)" },
  "--dsw-alias-interactive-bg-hover-solid": { light: "#eaf3fc", dark: "#26314e" },
  "--dsw-specific-sidebar-fill": { light: "rgba(231,242,252,0.85)", dark: "rgba(12,17,32,0.88)" },
  "--dsw-specific-sidebar-nav-item-active": { light: "#d9eaf9", dark: "#2a2948" },
  "--dsw-specific-sidebar-nav-item-hover": { light: "#e3f0fb", dark: "#202b46" },
  "--dsw-specific-sidebar-nav-item-active-accent": { light: "#ff8fab", dark: "#ff8fab" },
  "--dsw-specific-bubble": { light: "#e3f0fb", dark: "#202c49" },
  "--dsw-specific-bubble-highlight": { light: "#cde4f7", dark: "#303a61" },
  "--dsw-specific-input-major": { light: "#ffffff", dark: "#151d33" },
  "--dsw-specific-menu": { light: "#f8fbfe", dark: "#202a46" },
  "--dsw-specific-selector": { light: "#eaf3fc", dark: "#202a46" },
  "--dsw-alias-scrollbar-bg-l1": { light: "#cfe1f2", dark: "#303b5b" },
  "--dsw-alias-scrollbar-bg-l2": { light: "#cfe1f2", dark: "#303b5b" },
  "--dsw-alias-scrollbar-hover-l1": { light: "#a9c8e4", dark: "#536181" },
  "--dsw-alias-scrollbar-hover-l2": { light: "#a9c8e4", dark: "#536181" },
  "--dsw-alias-state-success-primary": { light: "#2fbf8f", dark: "#3ed59c" },
  "--dsw-alias-state-success-secondary": { light: "#57d3a5", dark: "#57d3a5" },
  "--dsw-alias-state-success-tertiary": { light: "#ddf6ec", dark: "#123b2e" },
  "--dsw-alias-state-error-primary": { light: "#e5484d", dark: "#f2696e" },
  "--dsw-alias-state-error-secondary": { light: "#f26d6d", dark: "#f26d6d" },
  "--dsw-alias-state-warn-primary": { light: "#f0a33c", dark: "#efaf55" },
  "--dsw-alias-state-warn-secondary": { light: "#f5bc6c", dark: "#f5bc6c" },
  "--dsw-alias-state-warn-tertiary": { light: "#fdf0dc", dark: "#3b2f16" },
  "--dsw-alias-markdown-inline-code": { light: "#e4f0fb", dark: "#222d49" },
  "--dsw-alias-markdown-code-block": { light: "#f4f9fe", dark: "#11182b" },
  "--dsw-alias-markdown-tag": { light: "#eaf3fc", dark: "#242f4c" },
  "--dsw-alias-tooltip-bg": { light: "#33465f", dark: "#252f49" },
  "--dsw-alias-toast-bg": { light: "#3b4e68", dark: "#29344f" }
};
var inject = ["theme"];
function apply(ctx) {
  ctx.effect(
    () => ctx.theme.overrideTokens(LAYER, TOKENS),
    "march7th-skin: alias-token layer"
  );
  ctx.effect(() => {
    const tag = document.createElement("style");
    tag.dataset.plugin = "march7th-skin";
    tag.textContent = skin_default;
    document.head.appendChild(tag);
    document.body.setAttribute(BODY_ATTR, "");
    return () => {
      tag.remove();
      document.body.removeAttribute(BODY_ATTR);
    };
  }, "march7th-skin: stylesheet and gate attribute");
  ctx.effect(() => {
    const marked = /* @__PURE__ */ new Set();
    const releases = /* @__PURE__ */ new Map();
    const markFlow = (flow) => {
      const scrollport = flow.parentElement;
      if (scrollport === null || scrollport.hasAttribute(CHAT_SCROLL_ATTR)) return;
      const formerScrollport = scrollport.closest("[data-conversation-scroll]");
      scrollport.setAttribute(CHAT_SCROLL_ATTR, "");
      scrollport.setAttribute("data-conversation-scroll", "");
      marked.add(scrollport);
      let pinned = true;
      const onScroll = () => {
        pinned = scrollport.scrollHeight - scrollport.scrollTop - scrollport.clientHeight <= 25;
        formerScrollport?.dispatchEvent(new Event("scroll"));
      };
      scrollport.addEventListener("scroll", onScroll, { passive: true });
      const composer = formerScrollport?.querySelector(":scope > [data-composer-seat]");
      const resizeObserver = composer === null || composer === void 0 ? null : new ResizeObserver(() => {
        if (pinned) scrollport.scrollTop = scrollport.scrollHeight;
      });
      if (composer !== null && composer !== void 0) resizeObserver?.observe(composer);
      releases.set(scrollport, () => {
        scrollport.removeEventListener("scroll", onScroll);
        resizeObserver?.disconnect();
      });
      scrollport.scrollTop = scrollport.scrollHeight;
    };
    const scan = (root) => {
      if (root instanceof Element && root.matches("[data-chat-flow]")) markFlow(root);
      for (const flow of root.querySelectorAll("[data-chat-flow]")) markFlow(flow);
    };
    scan(document);
    const observer = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) scan(node);
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      for (const scrollport of marked) {
        releases.get(scrollport)?.();
        scrollport.removeAttribute(CHAT_SCROLL_ATTR);
        scrollport.removeAttribute("data-conversation-scroll");
      }
    };
  }, "march7th-skin: non-overlapping transcript scrollport");
}
return module.exports; } });
//# sourceMappingURL=client.js.map
