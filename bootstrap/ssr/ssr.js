import { mergeProps, useSSRContext, unref, withCtx, createVNode, ref, onMounted, createTextVNode, withModifiers, openBlock, createBlock, toDisplayString, createCommentVNode, computed, onUnmounted, renderSlot, reactive, withDirectives, vModelText, Fragment, renderList, vModelSelect, watch, withKeys, nextTick, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrRenderTeleport } from "vue/server-renderer";
import { Link, useForm, Head, router, usePage, createInertiaApp } from "@inertiajs/vue3";
import Swal from "sweetalert2";
import { Carousel, Slide } from "vue3-carousel";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$L = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 316 316",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"></path></svg>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$K = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" }, _attrs))}><div>`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "w-20 h-20 fill-current text-gray-500" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const _sfc_main$I = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const PrimaryButton = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$G = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        value: __props.modelValue,
        ref_key: "input",
        ref: input
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const _sfc_main$F = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => form.reset()
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Confirm Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Confirm Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$I, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$F
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$I, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$E
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      required: true
    },
    value: {
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        type: "checkbox",
        value: __props.value,
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              name: "remember",
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$I, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$I, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$D, {
                      name: "remember",
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$C
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "name",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Register" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$I, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "name",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$I, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$I, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$I, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$B
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Reset Password" }),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$I, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$I, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$I, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$K, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided during registration. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Log Out`);
                } else {
                  return [
                    createTextVNode("Log Out")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, " A new verification link has been sent to the email address you provided during registration. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(PrimaryButton, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("logout"),
                    method: "post",
                    as: "button",
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Log Out")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white"
    }
  },
  setup(__props) {
    const props = __props;
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        48: "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "ltr:origin-top-left rtl:origin-top-right start-0";
      } else if (props.align === "right") {
        return "ltr:origin-top-right rtl:origin-top-left end-0";
      } else {
        return "origin-top";
      }
    });
    const open = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(open.value ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        open.value ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const _sfc_main$x = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const _sfc_main$v = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    href: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 text-start text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = {
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$w, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ms-6"><div class="ms-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$y, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              createVNode("span", { class: "inline-flex rounded-md" }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, {
              href: _ctx.route("profile.edit")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$x, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x, {
                href: _ctx.route("profile.edit")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              createVNode(_sfc_main$x, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ block: showingNavigationDropdown.value, hidden: !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$v, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="px-4"><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$v, {
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$v, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const formCategory = reactive({
      name: ""
    });
    const create = () => {
      router.post("/categories", formCategory, {
        onSuccess: (page) => {
        },
        onError: (errors) => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Create a new category</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Create a new category")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container w-3/4 p-5 mx-auto flex flex-col"${_scopeId}><div class="w-full flex flex-row-reverse mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("categories")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"${_scopeId2}>Back</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                    }, "Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full h-full bg-white py-10 rounded-lg shadow"${_scopeId}><div class="container mx-auto"${_scopeId}><form class="flex flex-col items-center gap-3"${_scopeId}><div class="flex flex-col w-96"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Name Category</label><input${ssrRenderAttr("value", formCategory.name)} placeholder="Name" type="text" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"${_scopeId}></div><div class="flex flex-col w-96"${_scopeId}><button type="submit" class="bg-blue-400 text-white rounded py-3"${_scopeId}> Create Category </button></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container w-3/4 p-5 mx-auto flex flex-col" }, [
                createVNode("div", { class: "w-full flex flex-row-reverse mb-3" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("categories")
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        type: "button",
                        class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                      }, "Back")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "w-full h-full bg-white py-10 rounded-lg shadow" }, [
                  createVNode("div", { class: "container mx-auto" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(create, ["prevent"]),
                      class: "flex flex-col items-center gap-3"
                    }, [
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("label", { class: "text-sm text-slate-400" }, "Name Category"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => formCategory.name = $event,
                          placeholder: "Name",
                          type: "text",
                          class: "text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, formCategory.name]
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-blue-400 text-white rounded py-3"
                        }, " Create Category ")
                      ])
                    ], 32)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Category/Create.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: ["category"],
  setup(__props) {
    const props = __props;
    const idCategory = ref(props.category.id);
    const formCategory = reactive({
      name: props.category.name
    });
    const update = () => {
      router.put("/categories/" + idCategory.value, formCategory, {
        onSuccess: (page) => {
        },
        onError: (errors) => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Edit category</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Edit category")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container w-3/4 p-5 mx-auto flex flex-col"${_scopeId}><div class="w-full flex flex-row-reverse mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("categories")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"${_scopeId2}>Back</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                    }, "Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full h-full bg-white py-10 rounded-lg shadow"${_scopeId}><div class="container mx-auto"${_scopeId}><form class="flex flex-col items-center gap-3"${_scopeId}><div class="flex flex-col w-96"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Name Category</label><input${ssrRenderAttr("value", formCategory.name)} placeholder="Name" type="text" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"${_scopeId}></div><div class="flex flex-col w-96"${_scopeId}><button type="submit" class="bg-blue-400 text-white rounded py-3"${_scopeId}> Update Category </button></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container w-3/4 p-5 mx-auto flex flex-col" }, [
                createVNode("div", { class: "w-full flex flex-row-reverse mb-3" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("categories")
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        type: "button",
                        class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                      }, "Back")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "w-full h-full bg-white py-10 rounded-lg shadow" }, [
                  createVNode("div", { class: "container mx-auto" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(update, ["prevent"]),
                      class: "flex flex-col items-center gap-3"
                    }, [
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("label", { class: "text-sm text-slate-400" }, "Name Category"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => formCategory.name = $event,
                          placeholder: "Name",
                          type: "text",
                          class: "text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, formCategory.name]
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-blue-400 text-white rounded py-3"
                        }, " Update Category ")
                      ])
                    ], 32)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Category/Edit.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __name: "Index",
  __ssrInlineRender: true,
  props: ["categories"],
  setup(__props) {
    const showAlert = () => {
      Swal.fire({
        title: "Custom Title",
        text: "This is a custom message",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Confirmed!", "You clicked Confirm!", "success");
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Categories</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Categories")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container w-3/4 p-5 mx-auto flex flex-col"${_scopeId}><div class="w-full flex flex-row-reverse mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("categories.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"${_scopeId2}><i class="w-4 h-4" data-feather="plus"${_scopeId2}></i> Create a new category</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                    }, [
                      createVNode("i", {
                        class: "w-4 h-4",
                        "data-feather": "plus"
                      }),
                      createTextVNode(" Create a new category")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full h-full bg-white p-3 rounded-lg shadow"${_scopeId}><table class="table-fixed w-full border-collapse rounded-md"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Name</th><th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<tr${_scopeId}><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>${ssrInterpolate(category.name)}</td><td class="px-3 py-5 border-b-8 border-white flex flex-row gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("categories.edit", category.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="w-4 h-4" data-feather="edit-2"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", {
                        class: "w-4 h-4",
                        "data-feather": "edit-2"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button${_scopeId}><i class="w-4 h-4" data-feather="trash"${_scopeId}></i></button></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container w-3/4 p-5 mx-auto flex flex-col" }, [
                createVNode("div", { class: "w-full flex flex-row-reverse mb-3" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("categories.create")
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        type: "button",
                        class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                      }, [
                        createVNode("i", {
                          class: "w-4 h-4",
                          "data-feather": "plus"
                        }),
                        createTextVNode(" Create a new category")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "w-full h-full bg-white p-3 rounded-lg shadow" }, [
                  createVNode("table", { class: "table-fixed w-full border-collapse rounded-md" }, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Name"),
                        createVNode("th", { class: "rounded-e-md bg-slate-100 text-slate-500 text-left p-3" }, "Action")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, toDisplayString(category.name), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white flex flex-row gap-2" }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("categories.edit", category.id)
                            }, {
                              default: withCtx(() => [
                                createVNode("i", {
                                  class: "w-4 h-4",
                                  "data-feather": "edit-2"
                                })
                              ]),
                              _: 2
                            }, 1032, ["href"]),
                            createVNode("button", { onClick: showAlert }, [
                              createVNode("i", {
                                class: "w-4 h-4",
                                "data-feather": "trash"
                              })
                            ])
                          ])
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Category/Index.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Dashboard" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Dashboard</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Dashboard")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}>You&#39;re logged in!</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-sm sm:rounded-lg" }, [
                    createVNode("div", { class: "p-6 text-gray-900" }, "You're logged in!")
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const carousel = "";
const _sfc_main$p = {
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: ["isOpen"],
  setup(__props) {
    ref({
      isOpen: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isOpen) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "absolute mt-2 w-48 bg-white border rounded shadow-lg" }, _attrs))}>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("member.transactions"),
          method: "get"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="block px-4 py-2 text-gray-800 hover:bg-gray-200"${_scopeId}> Transactions </div>`);
            } else {
              return [
                createVNode("div", { class: "block px-4 py-2 text-gray-800 hover:bg-gray-200" }, " Transactions ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("logout"),
          method: "post"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="block px-4 py-2 text-gray-800 hover:bg-gray-200"${_scopeId}> Log Out </div>`);
            } else {
              return [
                createVNode("div", { class: "block px-4 py-2 text-gray-800 hover:bg-gray-200" }, " Log Out ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownMenu.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const _sfc_main$o = {
  __name: "WelcomeBanner",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const isUserDropdownOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col relative items-center justify-center" }, _attrs))}><div class="flex w-3/4 items-center absolute z-10 top-5 bg-white rounded-full px-7"><div class="w-96">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("homepage")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-16 w-full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-16 w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-between w-full"><div class="flex divide-x-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("ych-comission")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-4 text-center justify-center flex items-center uppercase"${_scopeId}><span${_scopeId}>YCH Comission</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-4 text-center justify-center flex items-center uppercase" }, [
                createVNode("span", null, "YCH Comission")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#"><div class="mx-4 text-center justify-center flex items-center uppercase"><span>Shop</span></div></a><a href="#"><div class="mx-4 text-center justify-center flex items-center uppercase"><span>Ready to Adopt</span></div></a><a href="#"><div class="mx-4 text-center justify-center flex items-center uppercase"><span>About us</span></div></a></div>`);
      if (__props.user) {
        _push(`<div class="cursor-pointer"><div class="bg-red flex flex-row gap-1 z-50 mx-4 text-center justify-center items-center uppercase"><i data-feather="user"></i><span>${ssrInterpolate(__props.user.name)}</span></div>`);
        _push(ssrRenderComponent(_sfc_main$p, {
          isOpen: isUserDropdownOpen.value,
          "onUpdate:isOpen": ($event) => isUserDropdownOpen.value = $event,
          onLogout: _ctx.handleLogout
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (!__props.user) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("member.login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-red z-50 mx-4 text-center justify-center flex flex-row gap-1 items-center uppercase"${_scopeId}><i data-feather="user"${_scopeId}></i><span${_scopeId}>Login</span></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-red z-50 mx-4 text-center justify-center flex flex-row gap-1 items-center uppercase" }, [
                  createVNode("i", { "data-feather": "user" }),
                  createVNode("span", null, "Login")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-full h-[47rem] bg-welcome bg-no-repeat bg-center bg-cover flex flex-col justify-center content-center"><div class="flex flex-col absolute w-[30rem] top-72 left-72"><div class="flex flex-col text-left"><h1 class="text-6xl uppercase text-white mb-2">Grow With Fun</h1><p class="mb-5">Officia eu dolor proident voluptate anim pariatur proident culpa occaecat ea. Voluptate officia tempor irure esse anim et quis veniam exercitation nulla dolor et duis duis.</p><a href="#"><span class="text-white rounded-full px-3 py-2 bg-black uppercase opacity-60">See more ych Comission</span></a></div></div></div><div class="absolute z-20 top-0 right-0 w-[60rem] pointer-events-none"><img class="" src="asset-02.png"></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/WelcomeBanner.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Homepage_vue_vue_type_style_index_0_lang = "";
(function() {
  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/654b4815f2439e1631ed02fe/1hen135fj";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();
const _sfc_main$n = {
  __name: "Homepage",
  __ssrInlineRender: true,
  props: {
    user: {
      type: Object
    },
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const stringArrayImage = ref(["ych-static-01.png", "ych-static-02.png", "ych-static-03.png", "ych-static-04.png", "ych-static-05.png", "ych-static-06.png", "ych-static-07.png", "ych-static-08.png", "ych-static-09.png", "ych-static-10.png"]);
    const stringArrayImageAnimated = ref(["animated-emote-01.png", "animated-emote-02.png", "animated-emote-03.png", "animated-emote-04.png", "animated-emote-05.png", "animated-emote-06.png", "animated-emote-07.png", "animated-emote-08.png", "animated-emote-09.png", "animated-emote-10.png"]);
    const stringArrayImageDance = ref(["dance-01.png", "dance-02.png", "dance-03.png", "dance-04.png", "dance-05.png"]);
    const stringArrayImageLick = ref(["lick-01.png", "lick-02.png", "lick-03.png", "lick-04.png", "lick-05.png"]);
    const stringArrayImageRave = ref(["rave-01.png", "rave-02.png", "rave-03.png", "rave-04.png", "rave-05.png"]);
    const carouselDiscount = ref(null);
    const loadFeatherIcons = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      script.onload = () => {
        feather.replace();
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    onMounted(loadFeatherIcons);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>EightyEight</title><link rel="icon" type="image/x-icon" href="icon-01.png"${_scopeId}><link rel="preconnect" href="https://fonts.googleapis.com"${_scopeId}><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin${_scopeId}><link href="https://fonts.googleapis.com/css2?family=Lilita+One&amp;display=swap" rel="stylesheet"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "EightyEight"),
              createVNode("link", {
                rel: "icon",
                type: "image/x-icon",
                href: "icon-01.png"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: ""
              }),
              createVNode("link", {
                href: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
                rel: "stylesheet"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<body><div class="flex flex-col"><div class="flex items-center w-full bg-black h-20 text-white text-2xl text-center justify-center"><a href="#"><div class="flex"><span>sign up now</span><button class="ml-2 border-2 border-solid border-yellow-400 rounded-full px-3">50% off</button></div></a></div>`);
      _push(ssrRenderComponent(_sfc_main$o, { user: __props.user }, null, _parent));
      _push(`<div class="mt-24 flex flex-col justify-center w-3/4 container mx-auto relative">`);
      _push(ssrRenderComponent(unref(Carousel), {
        ref_key: "carouselDiscount",
        ref: carouselDiscount,
        "items-to-show": 1,
        "wrap-around": true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(10, (slide) => {
              _push2(ssrRenderComponent(unref(Slide), { key: slide }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", `/images/discount.jpeg`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", { src: `/images/discount.jpeg` }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(10, (slide) => {
                return createVNode(unref(Slide), { key: slide }, {
                  default: withCtx(() => [
                    createVNode("img", { src: `/images/discount.jpeg` }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex absolute items-center justify-between w-full h-full"><div class="relative"><div class="absolute -left-5"><button class="w-full h-full bg-slate-800 text-white rounded-full"><i class="w-10 h-10" data-feather="chevron-left"></i></button></div></div><div class="relative"><div class="absolute -left-5"><button class="w-full h-full bg-slate-800 text-white rounded-full"><i class="w-10 h-10" data-feather="chevron-right"></i></button></div></div></div></div><div class="flex flex-col justify-center w-3/4 container mx-auto mt-14 h-96"><h1 class="uppercase text-3xl mb-6">Popular YCH Comission</h1><div class="flex justify-between"><div class="flex flex-col text-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("ych-comission")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-48 h-48 flex items-center content-center justify-center relative"${_scopeId}><div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0"${_scopeId}></div><div class="w-32 h-32 flex"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Carousel), {
              class: "h-full",
              autoplay: 3e3,
              "wrap-around": true,
              transition: 1e3,
              "items-to-show": 1
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(stringArrayImage.value, (item, index) => {
                    _push3(ssrRenderComponent(unref(Slide), { key: index }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img class=""${ssrRenderAttr("src", `/images/comission/static-emote/${item}`)}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              class: "",
                              src: `/images/comission/static-emote/${item}`
                            }, null, 8, ["src"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(stringArrayImage.value, (item, index) => {
                      return openBlock(), createBlock(unref(Slide), { key: index }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "",
                            src: `/images/comission/static-emote/${item}`
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-48 h-48 flex items-center content-center justify-center relative" }, [
                createVNode("div", { class: "w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0" }),
                createVNode("div", { class: "w-32 h-32 flex" }, [
                  createVNode(unref(Carousel), {
                    class: "h-full",
                    autoplay: 3e3,
                    "wrap-around": true,
                    transition: 1e3,
                    "items-to-show": 1
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(stringArrayImage.value, (item, index) => {
                        return openBlock(), createBlock(unref(Slide), { key: index }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "",
                              src: `/images/comission/static-emote/${item}`
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span class="uppercase mt-3">Static emote</span></div><div class="flex flex-col text-center"><a href="#"><div class="w-48 h-48 flex items-center content-center justify-center relative"><div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0"></div><div class="w-32 h-32 flex">`);
      _push(ssrRenderComponent(unref(Carousel), {
        class: "h-full",
        autoplay: 3e3,
        "wrap-around": true,
        transition: 1e3,
        "items-to-show": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(stringArrayImageAnimated.value, (item, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class=""${ssrRenderAttr("src", `/images/comission/animated-emote/${item}`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "",
                        src: `/images/comission/animated-emote/${item}`
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(stringArrayImageAnimated.value, (item, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "",
                      src: `/images/comission/animated-emote/${item}`
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></a><span class="uppercase mt-3">animated emote</span></div><div class="flex flex-col text-center"><a href="#"><div class="w-48 h-48 flex items-center content-center justify-center relative"><div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0"></div><div class="w-32 h-32 flex">`);
      _push(ssrRenderComponent(unref(Carousel), {
        class: "h-full",
        autoplay: 3e3,
        "wrap-around": true,
        transition: 1e3,
        "items-to-show": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(stringArrayImageDance.value, (item, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class=""${ssrRenderAttr("src", `/images/comission/dance-collection/${item}`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "",
                        src: `/images/comission/dance-collection/${item}`
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(stringArrayImageDance.value, (item, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "",
                      src: `/images/comission/dance-collection/${item}`
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></a><span class="uppercase mt-3">dance collection</span></div><div class="flex flex-col text-center"><a href="#"><div class="w-48 h-48 flex items-center content-center justify-center relative"><div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0"></div><div class="w-32 h-32 flex">`);
      _push(ssrRenderComponent(unref(Carousel), {
        class: "h-full",
        autoplay: 3e3,
        "wrap-around": true,
        transition: 1e3,
        "items-to-show": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(stringArrayImageLick.value, (item, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class=""${ssrRenderAttr("src", `/images/comission/lick-collection/${item}`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "",
                        src: `/images/comission/lick-collection/${item}`
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(stringArrayImageLick.value, (item, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "",
                      src: `/images/comission/lick-collection/${item}`
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></a><span class="uppercase mt-3">lick collection</span></div><div class="flex flex-col text-center"><a href="#"><div class="w-48 h-48 flex items-center content-center justify-center relative"><div class="w-48 h-48 rounded-full bg-88-cream flex items-center justify-center content-center absolute z-0"></div><div class="w-32 h-32 flex">`);
      _push(ssrRenderComponent(unref(Carousel), {
        class: "h-full",
        autoplay: 3e3,
        "wrap-around": true,
        transition: 1e3,
        "items-to-show": 1
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(stringArrayImageRave.value, (item, index) => {
              _push2(ssrRenderComponent(unref(Slide), { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class=""${ssrRenderAttr("src", `/images/comission/rave/${item}`)}${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "",
                        src: `/images/comission/rave/${item}`
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(stringArrayImageRave.value, (item, index) => {
                return openBlock(), createBlock(unref(Slide), { key: index }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "",
                      src: `/images/comission/rave/${item}`
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></a><span class="uppercase mt-3">rave collection</span></div><div class="flex flex-col text-center"><a href="#"><div class="w-48"><img class="w-full" src="/images/comission/rave/rave-01.png"></div></a><span class="uppercase mt-3">Panel</span></div></div></div><div class="flex flex-col justify-center w-3/4 container mx-auto mt-16"><h1 class="uppercase text-3xl mb-6">Ready to Adopt Vtuber</h1></div><div class="flex flex-col justify-center relative"><div class="grid divide-x-4 grid-cols-3 text-center h-[55rem]"><div class="h-full w-full bg-88-orange bg-trans-vtuber relative bg-no-repeat bg-top bg-cover flex flex-col gap-3"><div class="h-[80%] w-full mt-20 absolute z-20 flex flex-col"><div class="h-full w-full relative"><div class="mx-auto h-full w-3/5 rounded-t-full flex flex-col border-black border-x-4 border-t-4 px-3 pt-3"><div class="bg-black w-full h-full rounded-t-full"><div class="flex flex-col text-center text-white pt-10"><span>Nama</span></div></div></div><div class="grow w-full absolute bottom-0"><img class="w-full object-scale-down" src="images/vtuber.png"></div></div><div class="border-black border-x-4 border-b-4 rounded-b-2xl p-3 mx-auto w-3/5"><div class="bg-black text-white text-center rounded-full"><span class="uppercase text-2xl">Show Detail</span></div></div></div><div class="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-transparent to-88-orange ..."></div></div><div class="h-full w-full bg-88-orange bg-trans-vtuber relative bg-no-repeat bg-top bg-cover flex flex-col gap-3"><div class="h-[80%] w-full mt-20 absolute z-20 flex flex-col"><div class="h-full w-full relative"><div class="mx-auto h-full w-3/5 rounded-t-full flex flex-col border-black border-x-4 border-t-4 px-3 pt-3"><div class="bg-black w-full h-full rounded-t-full"><div class="flex flex-col text-center text-white pt-10"><span>Nama</span></div></div></div><div class="grow w-full absolute bottom-0"><img class="w-full object-scale-down" src="images/vtuber.png"></div></div><div class="border-black border-x-4 border-b-4 rounded-b-2xl p-3 mx-auto w-3/5"><div class="bg-black text-white text-center rounded-full"><span class="uppercase text-2xl">Show Detail</span></div></div></div><div class="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-transparent to-88-orange ..."></div></div><div class="h-full w-full bg-88-orange bg-trans-vtuber relative bg-no-repeat bg-top bg-cover flex flex-col gap-3"><div class="h-[80%] w-full mt-20 absolute z-20 flex flex-col"><div class="h-full w-full relative"><div class="mx-auto h-full w-3/5 rounded-t-full flex flex-col border-black border-x-4 border-t-4 px-3 pt-3"><div class="bg-black w-full h-full rounded-t-full"><div class="flex flex-col text-center text-white pt-10"><span>Nama</span></div></div></div><div class="grow w-full absolute bottom-0"><img class="w-full object-scale-down" src="images/vtuber.png"></div></div><div class="border-black border-x-4 border-b-4 rounded-b-2xl p-3 mx-auto w-3/5"><div class="bg-black text-white text-center rounded-full"><span class="uppercase text-2xl">Show Detail</span></div></div></div><div class="h-full w-full absolute top-0 z-10 bg-gradient-to-b from-transparent to-88-orange ..."></div></div></div><div class="w-full absolute z-30 -bottom-24"><img src="images/asset-03.png"></div></div><div class="w-full flex flex-col bg-88-orange mt-28 py-10"><div class="container mx-auto flex flex-row justify-between"><div class="w-1/5 flex flex-col">`);
      _push(ssrRenderComponent(ApplicationLogo, null, null, _parent));
      _push(`</div><div class="flex flex-row"></div></div></div></div></body><!--]-->`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Homepage.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const Member_vue_vue_type_style_index_0_lang = "";
const _sfc_main$m = {
  __name: "Member",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const loadFeatherIcons = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      script.onload = () => {
        feather.replace();
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    onMounted(loadFeatherIcons);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>EightyEight</title><link rel="icon" type="image/x-icon" href="icon-01.png"${_scopeId}><link rel="preconnect" href="https://fonts.googleapis.com"${_scopeId}><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin${_scopeId}><link href="https://fonts.googleapis.com/css2?family=Lilita+One&amp;display=swap" rel="stylesheet"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "EightyEight"),
              createVNode("link", {
                rel: "icon",
                type: "image/x-icon",
                href: "icon-01.png"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: ""
              }),
              createVNode("link", {
                href: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
                rel: "stylesheet"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<body><div class="bg-88-orange w-screen h-screen bg-welcome bg-no-repeat bg-center bg-cover"><div class="flex flex-col h-full justify-center content-center items-center"><div class="w-96">`);
      _push(ssrRenderComponent(ApplicationLogo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      if (_ctx.status) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600">${ssrInterpolate(_ctx.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autofocus: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "password",
        value: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="block mt-4"><label class="flex items-center">`);
      _push(ssrRenderComponent(_sfc_main$D, {
        name: "remember",
        checked: unref(form).remember,
        "onUpdate:checked": ($event) => unref(form).remember = $event
      }, null, _parent));
      _push(`<span class="ms-2 text-sm text-gray-600">Remember me</span></label></div><div class="flex items-center mt-4"><button type="submit" class="px-3 py-2 w-full bg-gray-800 text-white hover:bg-gray-700 rounded text-center bg">Log In</button></div></form><span class="text-sm my-3">Or</span>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "text-sm",
        href: _ctx.route("member.register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register an account `);
          } else {
            return [
              createTextVNode(" Register an account ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></body><!--]-->`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Member.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {
  __name: "Menu",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const isUserDropdownOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-3/4 items-center bg-white rounded-full px-7" }, _attrs))}><div class="w-96">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("homepage")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationLogo, { class: "block h-16 w-full" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationLogo, { class: "block h-16 w-full" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex justify-between w-full"><div class="flex divide-x-2">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("ych-comission")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-4 text-center justify-center flex items-center uppercase"${_scopeId}><span${_scopeId}>YCH Comission</span></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-4 text-center justify-center flex items-center uppercase" }, [
                createVNode("span", null, "YCH Comission")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="#"><div class="mx-4 text-center justify-center flex items-center uppercase"><span>Shop</span></div></a><a href="#"><div class="mx-4 text-center justify-center flex items-center uppercase"><span>Ready to Adopt</span></div></a><a href="#"><div class="mx-4 text-center justify-center flex items-center uppercase"><span>About us</span></div></a></div><div class="cursor-pointer"><div class="bg-red flex flex-row gap-1 z-50 mx-4 text-center justify-center items-center uppercase"><i data-feather="user"></i><span>${ssrInterpolate(__props.user.name)}</span></div>`);
      _push(ssrRenderComponent(_sfc_main$p, {
        isOpen: isUserDropdownOpen.value,
        "onUpdate:isOpen": ($event) => isUserDropdownOpen.value = $event,
        onLogout: _ctx.handleLogout
      }, null, _parent));
      _push(`</div>`);
      if (!__props.user) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("member.login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-red z-50 mx-4 text-center justify-center flex flex-row gap-1 items-center uppercase"${_scopeId}><i data-feather="user"${_scopeId}></i><span${_scopeId}>Login</span></div>`);
            } else {
              return [
                createVNode("div", { class: "bg-red z-50 mx-4 text-center justify-center flex flex-row gap-1 items-center uppercase" }, [
                  createVNode("i", { "data-feather": "user" }),
                  createVNode("span", null, "Login")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Menu.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const loadFeatherIcons = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      script.onload = () => {
        feather.replace();
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    onMounted(loadFeatherIcons);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex flex-col bg-88-orange py-10" }, _attrs))}><div class="container mx-auto flex flex-row justify-between"><div class="w-1/5 flex flex-col">`);
      _push(ssrRenderComponent(ApplicationLogo, null, null, _parent));
      _push(`</div><div class="flex flex-row"></div></div></div>`);
    };
  }
};
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const MemberLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main$j = {
  __name: "MemberLayout",
  __ssrInlineRender: true,
  props: ["user", "cart", "cartTotal"],
  setup(__props) {
    const loadFeatherIcons = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      script.onload = () => {
        feather.replace();
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    onMounted(loadFeatherIcons);
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>EightyEight</title><link rel="icon" type="image/x-icon" href="icon-01.png"${_scopeId}><link rel="preconnect" href="https://fonts.googleapis.com"${_scopeId}><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin${_scopeId}><link href="https://fonts.googleapis.com/css2?family=Lilita+One&amp;display=swap" rel="stylesheet"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "EightyEight"),
              createVNode("link", {
                rel: "icon",
                type: "image/x-icon",
                href: "icon-01.png"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: ""
              }),
              createVNode("link", {
                href: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
                rel: "stylesheet"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<body><div class="flex flex-col"><div class="flex flex-col relative items-center justify-center">`);
      _push(ssrRenderComponent(_sfc_main$l, { user: __props.user }, null, _parent));
      _push(`<div class="w-full h-full min-h-screen pb-14 bg-welcome bg-no-repeat bg-center bg-cover flex flex-col content-center">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      _push(`</div></body><!--]-->`);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MemberLayout.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "Cart",
  __ssrInlineRender: true,
  props: ["user", "cart", "cartTotal"],
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const destroy = (id) => {
      form.delete(route("cart.destroy", id), {
        onFinish: () => console.log("cart item deleted")
      });
    };
    const checkout = () => {
      form.post(route("cart.checkout"), {
        onFinish: () => console.log("tessssssssadsadsadadasdasdasdasdasd")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$j, mergeProps({ user: __props.user }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto mt-10 flex flex-row w-3/4 bg-white rounded p-7"${_scopeId}><table class="table-fixed w-2/3 border-collapse rounded-md"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="rounded-s-md bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Item Detail</th><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Price</th><th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}>`);
            if (props.cart.length !== 0) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.cart, (item) => {
                _push2(`<tr${_scopeId}><td class="px-3 py-5 border-b-8 border-white"${_scopeId}><div class="w-20 h-20 flex flex-row"${_scopeId}><img${ssrRenderAttr("src", item.product.image)}${_scopeId}></div></td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>$${ssrInterpolate(item.product.price)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}><div class="flex flex-row gap-2"${_scopeId}><button${_scopeId}><i class="w-4 h-4" data-feather="trash"${_scopeId}></i></button></div></td></tr>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<tr${_scopeId}><td colspan="3" class="text-center text-sm text-slate-300"${_scopeId}> There is no item in your cart <br${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("ych-comission"),
                class: "text-sm underline"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Choose items `);
                  } else {
                    return [
                      createTextVNode(" Choose items ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</td></tr>`);
            }
            _push2(`</tbody></table><div class="w-1/3 flex flex-col"${_scopeId}><div class="w-full flex flex-col justify-between mx-3 bg-slate-100 rounded"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="p-5"${_scopeId}><span${_scopeId}>Order Summary</span></div><hr${_scopeId}><div class="flex flex-col mt-3"${_scopeId}><div class="flex flex-row px-5 py-3"${_scopeId}><span${_scopeId}>Subtotal</span><span class="ml-auto"${_scopeId}>$${ssrInterpolate(__props.cartTotal)}</span></div><div class="flex flex-col px-5 py-3"${_scopeId}><span${_scopeId}>Coupon Code</span><input type="text" class="w-3/4 rounded text-sm border border-gray-200" placeholder="Enter coupon code"${_scopeId}></div></div></div><div class="flex flex-col"${_scopeId}><hr${_scopeId}><div class="flex flex-row p-5"${_scopeId}><div${_scopeId}>Grand Total</div><div class="ml-auto"${_scopeId}>$${ssrInterpolate(__props.cartTotal)}</div></div></div></div><button class="mx-3 py-3 mt-3 w-full rounded bg-88-orange text-white uppercase"${_scopeId}> Checkout </button></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto mt-10 flex flex-row w-3/4 bg-white rounded p-7" }, [
                createVNode("table", { class: "table-fixed w-2/3 border-collapse rounded-md" }, [
                  createVNode("thead", null, [
                    createVNode("tr", null, [
                      createVNode("th", { class: "rounded-s-md bg-slate-100 text-slate-500 text-left p-3" }, "Item Detail"),
                      createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Price"),
                      createVNode("th", { class: "rounded-e-md bg-slate-100 text-slate-500 text-left p-3" }, "Action")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    props.cart.length !== 0 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.cart, (item) => {
                      return openBlock(), createBlock("tr", null, [
                        createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, [
                          createVNode("div", { class: "w-20 h-20 flex flex-row" }, [
                            createVNode("img", {
                              src: item.product.image
                            }, null, 8, ["src"])
                          ])
                        ]),
                        createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, "$" + toDisplayString(item.product.price), 1),
                        createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, [
                          createVNode("div", { class: "flex flex-row gap-2" }, [
                            createVNode("button", {
                              onClick: ($event) => destroy(item.id)
                            }, [
                              createVNode("i", {
                                class: "w-4 h-4",
                                "data-feather": "trash"
                              })
                            ], 8, ["onClick"])
                          ])
                        ])
                      ]);
                    }), 256)) : (openBlock(), createBlock("tr", { key: 1 }, [
                      createVNode("td", {
                        colspan: "3",
                        class: "text-center text-sm text-slate-300"
                      }, [
                        createTextVNode(" There is no item in your cart "),
                        createVNode("br"),
                        createVNode(unref(Link), {
                          href: _ctx.route("ych-comission"),
                          class: "text-sm underline"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Choose items ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]))
                  ])
                ]),
                createVNode("div", { class: "w-1/3 flex flex-col" }, [
                  createVNode("div", { class: "w-full flex flex-col justify-between mx-3 bg-slate-100 rounded" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("div", { class: "p-5" }, [
                        createVNode("span", null, "Order Summary")
                      ]),
                      createVNode("hr"),
                      createVNode("div", { class: "flex flex-col mt-3" }, [
                        createVNode("div", { class: "flex flex-row px-5 py-3" }, [
                          createVNode("span", null, "Subtotal"),
                          createVNode("span", { class: "ml-auto" }, "$" + toDisplayString(__props.cartTotal), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col px-5 py-3" }, [
                          createVNode("span", null, "Coupon Code"),
                          createVNode("input", {
                            type: "text",
                            class: "w-3/4 rounded text-sm border border-gray-200",
                            placeholder: "Enter coupon code"
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("hr"),
                      createVNode("div", { class: "flex flex-row p-5" }, [
                        createVNode("div", null, "Grand Total"),
                        createVNode("div", { class: "ml-auto" }, "$" + toDisplayString(__props.cartTotal), 1)
                      ])
                    ])
                  ]),
                  createVNode("button", {
                    onClick: checkout,
                    class: "mx-3 py-3 mt-3 w-full rounded bg-88-orange text-white uppercase"
                  }, " Checkout ")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Members/Cart.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: ["user", "cart", "cartTotal"],
  setup(__props) {
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$j, mergeProps({ user: __props.user }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto mt-10 flex flex-row w-3/4 bg-white rounded"${_scopeId}><div class="flex flex-col w-full h-full justify-center content-center items-center"${_scopeId}><div class="w-full border-b-2 p-7"${_scopeId}><span${_scopeId}>Dashboard</span></div><div class="grid grid-cols-4 w-full"${_scopeId}><div class="col-span-1 flex flex-col text-start"${_scopeId}><div class="p-7"${_scopeId}><span${_scopeId}>Profile</span></div><div class="p-7"${_scopeId}><span${_scopeId}>Transactions</span></div><div class="p-7"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="col-span-3 p-7 flex flex-col border-l-2"${_scopeId}><span${_scopeId}>Contents</span></div></div><hr${_scopeId}>`);
            if (_ctx.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(_ctx.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto mt-10 flex flex-row w-3/4 bg-white rounded" }, [
                createVNode("div", { class: "flex flex-col w-full h-full justify-center content-center items-center" }, [
                  createVNode("div", { class: "w-full border-b-2 p-7" }, [
                    createVNode("span", null, "Dashboard")
                  ]),
                  createVNode("div", { class: "grid grid-cols-4 w-full" }, [
                    createVNode("div", { class: "col-span-1 flex flex-col text-start" }, [
                      createVNode("div", { class: "p-7" }, [
                        createVNode("span", null, "Profile")
                      ]),
                      createVNode("div", { class: "p-7" }, [
                        createVNode("span", null, "Transactions")
                      ]),
                      createVNode("div", { class: "p-7" }, [
                        createVNode(unref(Link), {
                          href: _ctx.route("logout"),
                          method: "post",
                          as: "button"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Log Out ")
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ]),
                    createVNode("div", { class: "col-span-3 p-7 flex flex-col border-l-2" }, [
                      createVNode("span", null, "Contents")
                    ])
                  ]),
                  createVNode("hr"),
                  _ctx.status ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mb-4 font-medium text-sm text-green-600"
                  }, toDisplayString(_ctx.status), 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Members/Dashboard.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$h
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {
  __name: "PaymentConfirmation",
  __ssrInlineRender: true,
  props: ["user", "transaction"],
  setup(__props) {
    const props = __props;
    const form = useForm({
      id: props.transaction.id,
      paypal_email: null,
      image: null
    });
    const handleFileChange = (event) => {
      form.image = event.target.files[0];
    };
    const confirmation = () => {
      console.log("form payment confirmation", form);
      form.post(route("member.submit-confirm-payment", form.id), {
        onFinish: () => console.log("tessssssssadsadsadadasdasdasdasdasd")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$j, mergeProps({ user: __props.user }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto mt-10 flex flex-row w-3/4"${_scopeId}><div class="flex flex-col w-full h-full justify-center content-center p-7"${_scopeId}><h4 class="text-4xl font-bold text-white mb-7"${_scopeId}>Payment Confirmation</h4><div class="flex flex-col w-full h-full justify-center content-center"${_scopeId}><div class="grid grid-cols-8 bg-white rounded p-7 mb-5"${_scopeId}><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Transaction ID</label><span${_scopeId}>#${ssrInterpolate(__props.transaction.id)}</span></div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Subtotal</label><span${_scopeId}>$${ssrInterpolate(__props.transaction.sub_total)}</span></div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Discount</label><span${_scopeId}>$${ssrInterpolate(__props.transaction.discount)}</span></div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Grand Total</label><span${_scopeId}>$${ssrInterpolate(__props.transaction.grand_total)}</span></div><div class="flex flex-col col-span-2"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Status</label>`);
            if (__props.transaction.status == "payment_pending") {
              _push2(`<span class="rounded text-red-400"${_scopeId}>Pending Payment</span>`);
            } else if (__props.transaction.status == "payment_confirmation") {
              _push2(`<span class="rounded text-gray-400"${_scopeId}>Payment Confirmation</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Invoice</label><span class="underline cursor-pointer"${_scopeId}>Download</span></div></div><form class="grid grid-cols-6"${_scopeId}><div class="bg-white rounded p-7 flex flex-col gap-3 col-span-2"${_scopeId}><div class="w-full"${_scopeId}><div class="flex flex-col"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Paypal Email</label>`);
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "paypal_email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: unref(form).paypal_email,
              "onUpdate:modelValue": ($event) => unref(form).paypal_email = $event,
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="w-full mb-3"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="flex flex-col"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Image Product</label><input type="file" class="text-sm border-gray-300 text-sm"${_scopeId}></div></div></div><div class="w-full"${_scopeId}><div class="flex flex-col"${_scopeId}><div class="flex flex-col"${_scopeId}><button type="submit" class="bg-88-orange text-white rounded py-3"${_scopeId}> Request confirmation </button></div></div></div></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto mt-10 flex flex-row w-3/4" }, [
                createVNode("div", { class: "flex flex-col w-full h-full justify-center content-center p-7" }, [
                  createVNode("h4", { class: "text-4xl font-bold text-white mb-7" }, "Payment Confirmation"),
                  createVNode("div", { class: "flex flex-col w-full h-full justify-center content-center" }, [
                    createVNode("div", { class: "grid grid-cols-8 bg-white rounded p-7 mb-5" }, [
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "text-gray-300 text-sm" }, "Transaction ID"),
                        createVNode("span", null, "#" + toDisplayString(__props.transaction.id), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "text-gray-300 text-sm" }, "Subtotal"),
                        createVNode("span", null, "$" + toDisplayString(__props.transaction.sub_total), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "text-gray-300 text-sm" }, "Discount"),
                        createVNode("span", null, "$" + toDisplayString(__props.transaction.discount), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "text-gray-300 text-sm" }, "Grand Total"),
                        createVNode("span", null, "$" + toDisplayString(__props.transaction.grand_total), 1)
                      ]),
                      createVNode("div", { class: "flex flex-col col-span-2" }, [
                        createVNode("label", { class: "text-gray-300 text-sm" }, "Status"),
                        __props.transaction.status == "payment_pending" ? (openBlock(), createBlock("span", {
                          key: 0,
                          class: "rounded text-red-400"
                        }, "Pending Payment")) : __props.transaction.status == "payment_confirmation" ? (openBlock(), createBlock("span", {
                          key: 1,
                          class: "rounded text-gray-400"
                        }, "Payment Confirmation")) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex flex-col" }, [
                        createVNode("label", { class: "text-gray-300 text-sm" }, "Invoice"),
                        createVNode("span", { class: "underline cursor-pointer" }, "Download")
                      ])
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(confirmation, ["prevent"]),
                      class: "grid grid-cols-6"
                    }, [
                      createVNode("div", { class: "bg-white rounded p-7 flex flex-col gap-3 col-span-2" }, [
                        createVNode("div", { class: "w-full" }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("label", { class: "text-sm text-slate-400" }, "Paypal Email"),
                            createVNode(_sfc_main$G, {
                              id: "paypal_email",
                              type: "email",
                              class: "mt-1 block w-full",
                              modelValue: unref(form).paypal_email,
                              "onUpdate:modelValue": ($event) => unref(form).paypal_email = $event,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "w-full mb-3" }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("label", { class: "text-sm text-slate-400" }, "Image Product"),
                              createVNode("input", {
                                onChange: handleFileChange,
                                type: "file",
                                class: "text-sm border-gray-300 text-sm"
                              }, null, 32)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "w-full" }, [
                          createVNode("div", { class: "flex flex-col" }, [
                            createVNode("div", { class: "flex flex-col" }, [
                              createVNode("button", {
                                type: "submit",
                                class: "bg-88-orange text-white rounded py-3"
                              }, " Request confirmation ")
                            ])
                          ])
                        ])
                      ])
                    ], 32)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Members/PaymentConfirmation.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$g
}, Symbol.toStringTag, { value: "Module" }));
const Register_vue_vue_type_style_index_0_lang = "";
const _sfc_main$f = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
    const loadFeatherIcons = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      script.onload = () => {
        feather.replace();
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    onMounted(loadFeatherIcons);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>EightyEight</title><link rel="icon" type="image/x-icon" href="icon-01.png"${_scopeId}><link rel="preconnect" href="https://fonts.googleapis.com"${_scopeId}><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin${_scopeId}><link href="https://fonts.googleapis.com/css2?family=Lilita+One&amp;display=swap" rel="stylesheet"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "EightyEight"),
              createVNode("link", {
                rel: "icon",
                type: "image/x-icon",
                href: "icon-01.png"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: ""
              }),
              createVNode("link", {
                href: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
                rel: "stylesheet"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<body><div class="bg-88-orange w-screen h-screen bg-welcome bg-no-repeat bg-center bg-cover"><div class="flex flex-col h-full justify-center content-center items-center"><div class="w-96">`);
      _push(ssrRenderComponent(ApplicationLogo, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      if (_ctx.status) {
        _push(`<div class="mb-4 font-medium text-sm text-green-600">${ssrInterpolate(_ctx.status)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form><div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "password",
        value: "Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "password",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div><div class="mt-4">`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "password_confirmation",
        type: "password",
        class: "mt-1 block w-full",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        required: "",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-end mt-4">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("member.login"),
        class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Already registered? `);
          } else {
            return [
              createTextVNode(" Already registered? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(PrimaryButton, {
        class: ["ms-4", { "opacity-25": unref(form).processing }],
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Register `);
          } else {
            return [
              createTextVNode(" Register ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div></div></body><!--]-->`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Members/Register.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$f
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: ["links"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.links.length > 3) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
        ssrRenderList(__props.links, (link, p) => {
          _push(`<!--[-->`);
          if (link.url === null) {
            _push(`<div class="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded">${link.label}</div>`);
          } else {
            _push(ssrRenderComponent(unref(Link), {
              class: ["mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500", { "bg-blue-700 text-white": link.active }],
              href: link.url
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "Transaction",
  __ssrInlineRender: true,
  props: ["user", "transactions"],
  setup(__props) {
    useForm({});
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$j, mergeProps({ user: __props.user }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mx-auto mt-10 flex flex-row w-3/4"${_scopeId}><div class="flex flex-col w-full h-full justify-center content-center p-7"${_scopeId}><h4 class="text-4xl font-bold text-white mb-7"${_scopeId}>Transactions</h4><div class="flex flex-col gap-3 w-full h-full justify-center content-center"${_scopeId}><!--[-->`);
            ssrRenderList(__props.transactions.data, (transaction) => {
              _push2(`<div class="grid grid-cols-9 bg-white rounded p-7"${_scopeId}><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Transaction ID</label><span${_scopeId}>#${ssrInterpolate(transaction.id)}</span></div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Subtotal</label><span${_scopeId}>$${ssrInterpolate(transaction.sub_total)}</span></div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Discount</label><span${_scopeId}>$${ssrInterpolate(transaction.discount)}</span></div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Grand Total</label><span${_scopeId}>$${ssrInterpolate(transaction.grand_total)}</span></div><div class="flex flex-col col-span-2"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Status</label>`);
              if (transaction.status == "payment_pending") {
                _push2(`<span class="rounded text-red-400"${_scopeId}>Pending Payment</span>`);
              } else if (transaction.status == "payment_confirmation") {
                _push2(`<span class="rounded text-gray-400"${_scopeId}>Waiting Confirmation</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex flex-col"${_scopeId}><label class="text-gray-300 text-sm"${_scopeId}>Invoice</label><a${ssrRenderAttr("href", _ctx.route("member.invoice", transaction.id))}${_scopeId}><span class="underline cursor-pointer"${_scopeId}>Download</span></a></div><div class="flex flex-col col-span-2 mt-3 items-end"${_scopeId}><div class="mt-1"${_scopeId}>`);
              if (transaction.status == "payment_pending") {
                _push2(ssrRenderComponent(unref(Link), {
                  href: _ctx.route("member.payment-confirmation", transaction.id)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<span class="px-4 py-2 rounded border-2 text-green-500 rounded"${_scopeId2}>Payment Confirmation</span>`);
                    } else {
                      return [
                        createVNode("span", { class: "px-4 py-2 rounded border-2 text-green-500 rounded" }, "Payment Confirmation")
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<span class="px-4 py-2 rounded border-2 text-gray-400 rounded"${_scopeId}>Waiting Confirmation</span>`);
              }
              _push2(`</div></div></div>`);
            });
            _push2(`<!--]-->`);
            _push2(ssrRenderComponent(_sfc_main$e, {
              links: __props.transactions.links
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "mx-auto mt-10 flex flex-row w-3/4" }, [
                createVNode("div", { class: "flex flex-col w-full h-full justify-center content-center p-7" }, [
                  createVNode("h4", { class: "text-4xl font-bold text-white mb-7" }, "Transactions"),
                  createVNode("div", { class: "flex flex-col gap-3 w-full h-full justify-center content-center" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.transactions.data, (transaction) => {
                      return openBlock(), createBlock("div", { class: "grid grid-cols-9 bg-white rounded p-7" }, [
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", { class: "text-gray-300 text-sm" }, "Transaction ID"),
                          createVNode("span", null, "#" + toDisplayString(transaction.id), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", { class: "text-gray-300 text-sm" }, "Subtotal"),
                          createVNode("span", null, "$" + toDisplayString(transaction.sub_total), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", { class: "text-gray-300 text-sm" }, "Discount"),
                          createVNode("span", null, "$" + toDisplayString(transaction.discount), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", { class: "text-gray-300 text-sm" }, "Grand Total"),
                          createVNode("span", null, "$" + toDisplayString(transaction.grand_total), 1)
                        ]),
                        createVNode("div", { class: "flex flex-col col-span-2" }, [
                          createVNode("label", { class: "text-gray-300 text-sm" }, "Status"),
                          transaction.status == "payment_pending" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "rounded text-red-400"
                          }, "Pending Payment")) : transaction.status == "payment_confirmation" ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "rounded text-gray-400"
                          }, "Waiting Confirmation")) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex flex-col" }, [
                          createVNode("label", { class: "text-gray-300 text-sm" }, "Invoice"),
                          createVNode("a", {
                            href: _ctx.route("member.invoice", transaction.id)
                          }, [
                            createVNode("span", { class: "underline cursor-pointer" }, "Download")
                          ], 8, ["href"])
                        ]),
                        createVNode("div", { class: "flex flex-col col-span-2 mt-3 items-end" }, [
                          createVNode("div", { class: "mt-1" }, [
                            transaction.status == "payment_pending" ? (openBlock(), createBlock(unref(Link), {
                              key: 0,
                              href: _ctx.route("member.payment-confirmation", transaction.id)
                            }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "px-4 py-2 rounded border-2 text-green-500 rounded" }, "Payment Confirmation")
                              ]),
                              _: 2
                            }, 1032, ["href"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "px-4 py-2 rounded border-2 text-gray-400 rounded"
                            }, "Waiting Confirmation"))
                          ])
                        ])
                      ]);
                    }), 256)),
                    createVNode(_sfc_main$e, {
                      links: __props.transactions.links
                    }, null, 8, ["links"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Members/Transaction.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$d
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  __name: "Create",
  __ssrInlineRender: true,
  props: ["categories"],
  setup(__props) {
    const formProduct = reactive({
      name: "",
      image: null,
      transparentBg: null,
      category: 1,
      price: 0,
      youtube: ""
    });
    const handleFileChange = (event) => {
      formProduct.image = event.target.files[0];
    };
    const handleFileChangedTransparent = (event) => {
      formProduct.transparentBg = event.target.files[0];
    };
    const create = () => {
      console.log("formProduct", formProduct);
      router.post("/products", formProduct, {
        onSuccess: (page) => {
        },
        onError: (errors) => {
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Create a new product</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Create a new product")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container w-3/4 p-5 mx-auto flex flex-col"${_scopeId}><div class="w-full flex flex-row-reverse mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"${_scopeId2}>Back</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                    }, "Back")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full h-full bg-white py-10 rounded-lg shadow"${_scopeId}><div class="container mx-auto"${_scopeId}><form class="flex flex-col items-center gap-3"${_scopeId}><div class="flex flex-col w-96"${_scopeId}><label for="countries" class="text-sm text-slate-400"${_scopeId}>Category Product</label><select id="categories" class="text-sm rounded block w-full p-2.5 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"${_scopeId}><option value="1" class="capitalize" selected disabled${_scopeId}>Select category</option><!--[-->`);
            ssrRenderList(__props.categories, (category) => {
              _push2(`<option${ssrRenderAttr("value", category)} class="text-sm capitalize"${_scopeId}>${ssrInterpolate(category.name)}</option>`);
            });
            _push2(`<!--]--></select></div><div class="flex flex-col w-96"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Image Product</label><input type="file" multiple="multiple" class="text-sm border-gray-300 text-sm"${_scopeId}></div>`);
            if (formProduct.category.value === "adopt-vtuber") {
              _push2(`<div class="flex flex-col w-96"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Transparent Background Image Product</label><input type="file" multiple="multiple" class="text-sm border-gray-300 text-sm"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (formProduct.category.value === "adopt-vtuber") {
              _push2(`<div class="flex flex-col w-96"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Youtube Link</label><input${ssrRenderAttr("value", formProduct.youtube)} placeholder="Youtube Link" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col w-96"${_scopeId}><label class="text-sm text-slate-400"${_scopeId}>Price Product</label><input${ssrRenderAttr("value", formProduct.price)} placeholder="Price product" type="number" min="0" class="text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"${_scopeId}></div><div class="flex flex-col w-96"${_scopeId}><button type="submit" class="bg-blue-400 text-white rounded py-3"${_scopeId}> Create Product </button></div></form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container w-3/4 p-5 mx-auto flex flex-col" }, [
                createVNode("div", { class: "w-full flex flex-row-reverse mb-3" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("products")
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        type: "button",
                        class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                      }, "Back")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "w-full h-full bg-white py-10 rounded-lg shadow" }, [
                  createVNode("div", { class: "container mx-auto" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(create, ["prevent"]),
                      class: "flex flex-col items-center gap-3"
                    }, [
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("label", {
                          for: "countries",
                          class: "text-sm text-slate-400"
                        }, "Category Product"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => formProduct.category = $event,
                          id: "categories",
                          class: "text-sm rounded block w-full p-2.5 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                        }, [
                          createVNode("option", {
                            value: "1",
                            class: "capitalize",
                            selected: "",
                            disabled: ""
                          }, "Select category"),
                          (openBlock(true), createBlock(Fragment, null, renderList(__props.categories, (category) => {
                            return openBlock(), createBlock("option", {
                              key: category.value,
                              value: category,
                              class: "text-sm capitalize"
                            }, toDisplayString(category.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, formProduct.category]
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("label", { class: "text-sm text-slate-400" }, "Image Product"),
                        createVNode("input", {
                          onChange: handleFileChange,
                          type: "file",
                          multiple: "multiple",
                          class: "text-sm border-gray-300 text-sm"
                        }, null, 32)
                      ]),
                      formProduct.category.value === "adopt-vtuber" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex flex-col w-96"
                      }, [
                        createVNode("label", { class: "text-sm text-slate-400" }, "Transparent Background Image Product"),
                        createVNode("input", {
                          onChange: handleFileChangedTransparent,
                          type: "file",
                          multiple: "multiple",
                          class: "text-sm border-gray-300 text-sm"
                        }, null, 32)
                      ])) : createCommentVNode("", true),
                      formProduct.category.value === "adopt-vtuber" ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex flex-col w-96"
                      }, [
                        createVNode("label", { class: "text-sm text-slate-400" }, "Youtube Link"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => formProduct.youtube = $event,
                          placeholder: "Youtube Link",
                          class: "text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, formProduct.youtube]
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("label", { class: "text-sm text-slate-400" }, "Price Product"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => formProduct.price = $event,
                          placeholder: "Price product",
                          type: "number",
                          min: "0",
                          class: "text-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, formProduct.price]
                        ])
                      ]),
                      createVNode("div", { class: "flex flex-col w-96" }, [
                        createVNode("button", {
                          type: "submit",
                          class: "bg-blue-400 text-white rounded py-3"
                        }, " Create Product ")
                      ])
                    ], 32)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Create.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  __name: "Index",
  __ssrInlineRender: true,
  props: ["products"],
  setup(__props) {
    const showAlert = (id) => {
      Swal.fire({
        title: "Delete Icon",
        text: "Do you wa  nt to delete this icon?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm"
      }).then((result) => {
        if (result.isConfirmed) {
          router.delete("/products/" + id, {
            onSuccess: (page) => {
              Swal.fire("Confirmed!", "You clicked Confirm!", "success");
            },
            onError: (errors) => {
            }
          });
        }
      });
    };
    const destroy = (id) => {
      console.log("id", id);
      showAlert(id);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Products</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Products")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container w-3/4 p-5 mx-auto flex flex-col"${_scopeId}><div class="w-full flex flex-row-reverse mb-3"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("products.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button type="button" class="px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"${_scopeId2}><i class="w-4 h-4" data-feather="plus"${_scopeId2}></i> Create a new product</button>`);
                } else {
                  return [
                    createVNode("button", {
                      type: "button",
                      class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                    }, [
                      createVNode("i", {
                        class: "w-4 h-4",
                        "data-feather": "plus"
                      }),
                      createTextVNode(" Create a new product")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="w-full h-full bg-white p-3 rounded-lg shadow"${_scopeId}><table class="table-fixed w-full border-collapse rounded-md"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="rounded-s-md bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Image</th><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Category</th><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Price</th><th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(__props.products, (product) => {
              _push2(`<tr${_scopeId}><td class="px-3 py-5 border-b-8 border-white"${_scopeId}><div class="w-20 h-20"${_scopeId}><img${ssrRenderAttr("src", product.image)}${_scopeId}></div></td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>${ssrInterpolate(product.category.name)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>${ssrInterpolate(product.price)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}><div class="flex flex-row gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("products.edit", product.id)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<i class="w-4 h-4" data-feather="edit-2"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("i", {
                        class: "w-4 h-4",
                        "data-feather": "edit-2"
                      })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<button${_scopeId}><i class="w-4 h-4" data-feather="trash"${_scopeId}></i></button></div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container w-3/4 p-5 mx-auto flex flex-col" }, [
                createVNode("div", { class: "w-full flex flex-row-reverse mb-3" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("products.create")
                  }, {
                    default: withCtx(() => [
                      createVNode("button", {
                        type: "button",
                        class: "px-3 py-2 text-sm bg-slate-400 rounded text-white flex flex-row items-center content-center gap-1"
                      }, [
                        createVNode("i", {
                          class: "w-4 h-4",
                          "data-feather": "plus"
                        }),
                        createTextVNode(" Create a new product")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"])
                ]),
                createVNode("div", { class: "w-full h-full bg-white p-3 rounded-lg shadow" }, [
                  createVNode("table", { class: "table-fixed w-full border-collapse rounded-md" }, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "rounded-s-md bg-slate-100 text-slate-500 text-left p-3" }, "Image"),
                        createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Category"),
                        createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Price"),
                        createVNode("th", { class: "rounded-e-md bg-slate-100 text-slate-500 text-left p-3" }, "Action")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.products, (product) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, [
                            createVNode("div", { class: "w-20 h-20" }, [
                              createVNode("img", {
                                src: product.image
                              }, null, 8, ["src"])
                            ])
                          ]),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, toDisplayString(product.category.name), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, toDisplayString(product.price), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, [
                            createVNode("div", { class: "flex flex-row gap-2" }, [
                              createVNode(unref(Link), {
                                href: _ctx.route("products.edit", product.id)
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", {
                                    class: "w-4 h-4",
                                    "data-feather": "edit-2"
                                  })
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("button", {
                                onClick: ($event) => destroy(product.id)
                              }, [
                                createVNode("i", {
                                  class: "w-4 h-4",
                                  "data-feather": "trash"
                                })
                              ], 8, ["onClick"])
                            ])
                          ])
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Index.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$b
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const DangerButton = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$9 = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900">Delete Account</h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
      _push(ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete Account`);
          } else {
            return [
              createTextVNode("Delete Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}> Are you sure you want to delete your account? </h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$G, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$J, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(DangerButton, {
              class: ["ms-3", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing,
              onClick: deleteUser
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-6" }, [
                createVNode("h2", { class: "text-lg font-medium text-gray-900" }, " Are you sure you want to delete your account? "),
                createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                createVNode("div", { class: "mt-6" }, [
                  createVNode(_sfc_main$I, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  createVNode(_sfc_main$G, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    onKeyup: withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$J, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-6 flex justify-end" }, [
                  createVNode(_sfc_main$8, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(DangerButton, {
                    class: ["ms-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Password</h2><p class="mt-1 text-sm text-gray-600"> Ensure your account is using a long, random password to stay secure. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: unref(form).current_password,
        "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        message: unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: unref(form).password,
        "onUpdate:modelValue": ($event) => unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        message: unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "password_confirmation",
        modelValue: unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        message: unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Profile Information</h2><p class="mt-1 text-sm text-gray-600"> Update your account&#39;s profile information and email address. </p></header><form class="mt-6 space-y-6"><div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: unref(form).name,
        "onUpdate:modelValue": ($event) => unref(form).name = $event,
        required: "",
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_sfc_main$I, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$G, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: unref(form).email,
        "onUpdate:modelValue": ($event) => unref(form).email = $event,
        required: "",
        autocomplete: "username"
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$J, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && unref(user).email_verified_at === null) {
        _push(`<div><p class="text-sm mt-2 text-gray-800"> Your email address is unverified. `);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
      _push(ssrRenderComponent(PrimaryButton, {
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Profile</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Profile")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6" }, [
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$5, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$6, { class: "max-w-xl" })
                  ]),
                  createVNode("div", { class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg" }, [
                    createVNode(_sfc_main$7, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "Index",
  __ssrInlineRender: true,
  props: ["products", "transactions"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Transactions</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Transactions")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container w-3/4 p-5 mx-auto flex flex-col"${_scopeId}><div class="w-full h-full bg-white p-3 rounded-lg shadow"${_scopeId}><table class="table-fixed w-full border-collapse rounded-md"${_scopeId}><thead${_scopeId}><tr${_scopeId}><th class="rounded-s-md bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Transaction Id</th><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Sub Total</th><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Discount</th><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Grand Total</th><th class="bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Status</th><th class="rounded-e-md bg-slate-100 text-slate-500 text-left p-3"${_scopeId}>Action</th></tr></thead><tbody${_scopeId}>`);
            if (__props.transactions) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.transactions, (transaction) => {
                _push2(`<tr${_scopeId}><td class="px-3 py-5 border-b-8 border-white"${_scopeId}> #${ssrInterpolate(transaction.id)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>${ssrInterpolate(transaction.sub_total)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>${ssrInterpolate(transaction.discount)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>${ssrInterpolate(transaction.grand_total)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}>${ssrInterpolate(transaction.status)}</td><td class="px-3 py-5 border-b-8 border-white"${_scopeId}><div class="flex"${_scopeId}><button class="btn btn-primary btn-sm"${_scopeId}>View</button></div></td></tr>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<tr${_scopeId}><td class="px-3 py-5 border-b-8 border-white col-span-5 text-center"${_scopeId}> There is no data </td></tr>`);
            }
            _push2(`</tbody></table></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container w-3/4 p-5 mx-auto flex flex-col" }, [
                createVNode("div", { class: "w-full h-full bg-white p-3 rounded-lg shadow" }, [
                  createVNode("table", { class: "table-fixed w-full border-collapse rounded-md" }, [
                    createVNode("thead", null, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "rounded-s-md bg-slate-100 text-slate-500 text-left p-3" }, "Transaction Id"),
                        createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Sub Total"),
                        createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Discount"),
                        createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Grand Total"),
                        createVNode("th", { class: "bg-slate-100 text-slate-500 text-left p-3" }, "Status"),
                        createVNode("th", { class: "rounded-e-md bg-slate-100 text-slate-500 text-left p-3" }, "Action")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      __props.transactions ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(__props.transactions, (transaction) => {
                        return openBlock(), createBlock("tr", null, [
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, " #" + toDisplayString(transaction.id), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, toDisplayString(transaction.sub_total), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, toDisplayString(transaction.discount), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, toDisplayString(transaction.grand_total), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, toDisplayString(transaction.status), 1),
                          createVNode("td", { class: "px-3 py-5 border-b-8 border-white" }, [
                            createVNode("div", { class: "flex" }, [
                              createVNode("button", { class: "btn btn-primary btn-sm" }, "View")
                            ])
                          ])
                        ]);
                      }), 256)) : (openBlock(), createBlock("tr", { key: 1 }, [
                        createVNode("td", { class: "px-3 py-5 border-b-8 border-white col-span-5 text-center" }, " There is no data ")
                      ]))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transactions/Index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Show",
  __ssrInlineRender: true,
  props: ["transaction", "orders"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$u, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}>Transaction Detail</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, "Transaction Detail")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="container w-3/4 p-5 mx-auto flex flex-col gap-3"${_scopeId}><div class="w-full h-full bg-white p-3 rounded-lg shadow"${_scopeId}><div class="grid grid-cols-5"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-400"${_scopeId}>Transaction ID</span><span${_scopeId}>#${ssrInterpolate(__props.transaction.id)}</span></div><div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-400"${_scopeId}>Subtotal</span><span${_scopeId}>$${ssrInterpolate(__props.transaction.sub_total)}</span></div><div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-400"${_scopeId}>Discount</span><span${_scopeId}>$${ssrInterpolate(__props.transaction.discount)}</span></div><div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-400"${_scopeId}>Grand Total</span><span${_scopeId}>$${ssrInterpolate(__props.transaction.grand_total)}</span></div><div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-400"${_scopeId}>Status</span><span${_scopeId}>${ssrInterpolate(__props.transaction.status)}</span></div></div></div><div class="w-full h-full bg-white p-3 rounded-lg shadow flex flex-col gap-5"${_scopeId}><div class="flex flex-col"${_scopeId}><span class="text-gray-400"${_scopeId}>Order Quantity</span><div class="grid grid-cols-10 mt-1"${_scopeId}>${ssrInterpolate(__props.orders.length)}</div></div><div class="flex flex-col"${_scopeId}><span class="text-gray-400"${_scopeId}>List Orders</span><div class="grid grid-cols-10 mt-1"${_scopeId}><!--[-->`);
            ssrRenderList(__props.orders, (order) => {
              _push2(`<div class="flex flex-col"${_scopeId}><span class="text-sm text-gray-400"${_scopeId}>${ssrInterpolate(order.product.category.name)}</span><div class="w-24 h-24 mb-1"${_scopeId}><img${ssrRenderAttr("src", order.product.image)}${_scopeId}></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "container w-3/4 p-5 mx-auto flex flex-col gap-3" }, [
                createVNode("div", { class: "w-full h-full bg-white p-3 rounded-lg shadow" }, [
                  createVNode("div", { class: "grid grid-cols-5" }, [
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-sm text-gray-400" }, "Transaction ID"),
                      createVNode("span", null, "#" + toDisplayString(__props.transaction.id), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-sm text-gray-400" }, "Subtotal"),
                      createVNode("span", null, "$" + toDisplayString(__props.transaction.sub_total), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-sm text-gray-400" }, "Discount"),
                      createVNode("span", null, "$" + toDisplayString(__props.transaction.discount), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-sm text-gray-400" }, "Grand Total"),
                      createVNode("span", null, "$" + toDisplayString(__props.transaction.grand_total), 1)
                    ]),
                    createVNode("div", { class: "flex flex-col" }, [
                      createVNode("span", { class: "text-sm text-gray-400" }, "Status"),
                      createVNode("span", null, toDisplayString(__props.transaction.status), 1)
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full h-full bg-white p-3 rounded-lg shadow flex flex-col gap-5" }, [
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("span", { class: "text-gray-400" }, "Order Quantity"),
                    createVNode("div", { class: "grid grid-cols-10 mt-1" }, toDisplayString(__props.orders.length), 1)
                  ]),
                  createVNode("div", { class: "flex flex-col" }, [
                    createVNode("span", { class: "text-gray-400" }, "List Orders"),
                    createVNode("div", { class: "grid grid-cols-10 mt-1" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(__props.orders, (order) => {
                        return openBlock(), createBlock("div", { class: "flex flex-col" }, [
                          createVNode("span", { class: "text-sm text-gray-400" }, toDisplayString(order.product.category.name), 1),
                          createVNode("div", { class: "w-24 h-24 mb-1" }, [
                            createVNode("img", {
                              src: order.product.image
                            }, null, 8, ["src"])
                          ])
                        ]);
                      }), 256))
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transactions/Show.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_24 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const Welcome_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: {
      type: Boolean
    },
    canRegister: {
      type: Boolean
    },
    laravelVersion: {
      type: String,
      required: true
    },
    phpVersion: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">`);
      if (__props.canLogin) {
        _push(`<div class="sm:fixed sm:top-0 sm:right-0 p-6 text-end">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Dashboard`);
              } else {
                return [
                  createTextVNode("Dashboard")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`Log in`);
              } else {
                return [
                  createTextVNode("Log in")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Register`);
                } else {
                  return [
                    createTextVNode("Register")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-7xl mx-auto p-6 lg:p-8"><div class="flex justify-center"><svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto bg-gray-100 dark:bg-gray-900"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="#FF2D20"></path></svg></div><div class="mt-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><a href="https://laravel.com/docs" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Documentation</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laracasts.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laracasts</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laravel News</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Vibrant Ecosystem</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Forge</a>, <a href="https://vapor.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Vapor</a>, <a href="https://nova.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Nova</a>, and <a href="https://envoyer.io" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">Telescope</a>, and more. </p></div></div></div></div><div class="flex justify-center mt-16 px-6 sm:items-center sm:justify-between"><div class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-start"><div class="flex items-center gap-4"><a href="https://github.com/sponsors/taylorotwell" class="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="-mt-px me-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg> Sponsor </a></div></div><div class="ms-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_25 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const YchComission_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Ych-comission",
  __ssrInlineRender: true,
  props: ["products", "user", "cart", "productAdded", "cartTotal"],
  setup(__props) {
    const props = __props;
    useForm({
      product: null,
      user: null
    });
    ref(false);
    const activeTab = ref("static");
    const addedProduct = (product_id) => {
      if (props.productAdded.includes(product_id)) {
        return true;
      } else {
        return false;
      }
    };
    const loadFeatherIcons = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js";
      script.onload = () => {
        feather.replace();
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    };
    onMounted(loadFeatherIcons);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>EightyEight</title><link rel="icon" type="image/x-icon" href="icon-01.png"${_scopeId}><link rel="preconnect" href="https://fonts.googleapis.com"${_scopeId}><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin${_scopeId}><link href="https://fonts.googleapis.com/css2?family=Lilita+One&amp;display=swap" rel="stylesheet"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "EightyEight"),
              createVNode("link", {
                rel: "icon",
                type: "image/x-icon",
                href: "icon-01.png"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
              }),
              createVNode("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com",
                crossorigin: ""
              }),
              createVNode("link", {
                href: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap",
                rel: "stylesheet"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<body><div class="flex flex-col gap-3 text-center items-center divide-y-2 fixed pl-3 py-3 top-1/2 right-0 border-black border-2 rounded-r-none rounded-l-md bg-black text-white z-30"><div class="flex flex-col text-center"><span class="text-xl">${ssrInterpolate(__props.cart)}</span><i class="w-10 h-10 text-white" data-feather="shopping-cart"></i></div><div class="flex flex-col text-center pt-3"><span class="text-md">Total Price</span><span class="text-xl mb-5">$${ssrInterpolate(__props.cartTotal)}</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("cart.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-md border-l border-y rounded-l border-white cursor-pointer px-3 py-1"${_scopeId}>Checkout</span>`);
          } else {
            return [
              createVNode("span", { class: "text-md border-l border-y rounded-l border-white cursor-pointer px-3 py-1" }, "Checkout")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col">`);
      _push(ssrRenderComponent(_sfc_main$o, { user: __props.user }, null, _parent));
      _push(`<div class="h-full w-full container mx-auto"><div class="flex flex-col items-center content-center my-10"><h3 class="uppercase text-4xl mb-3">YCH Comission</h3><div class="flex flex-row divide-x-2 gap-3 text-center mb-10 mt-5 text-xl"><div class="${ssrRenderClass([activeTab.value === "static" ? "px-6 bg-88-orange rounded-full text-white" : "px-6 hover:bg-88-orange hover:text-white hover:rounded-full", "cursor-pointer px-6 ease-in transition-all hover:bg-88-orange hover:text-white hover:rounded-full"])}">Static Emote</div><div class="${ssrRenderClass([activeTab.value === "animate" ? "px-6 bg-88-orange rounded-full text-white" : "px-6 hover:bg-88-orange hover:text-white hover:rounded-full", "cursor-pointer px-6 ease-in transition-all hover:bg-88-orange hover:text-white hover:rounded-full"])}">Animated Emote</div><div class="pl-3">Animated Collection</div><div class="pl-3">PANEL</div></div>`);
      if (activeTab.value === "static") {
        _push(`<div class="grid grid-cols-10 gap-10"><!--[-->`);
        ssrRenderList(__props.products, (product) => {
          _push(`<div class="flex flex-col"><div class="w-24 h-24 mb-1"><img${ssrRenderAttr("src", product.image)}></div><div class="flex flex-row justify-between"><i class="w-4 h-4 hover:fill-red-400 hover:border-red-400" data-feather="heart"></i><button type="button"><i class="${ssrRenderClass([{ "fill-black": addedProduct(product.id) }, "w-4 h-4"])}" data-feather="shopping-cart"></i></button></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeTab.value === "animate") {
        _push(`<div> animate </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="w-full flex flex-col bg-88-orange mt-28 py-10"><div class="container mx-auto flex flex-row justify-between"><div class="w-1/5 flex flex-col">`);
      _push(ssrRenderComponent(ApplicationLogo, null, null, _parent));
      _push(`</div><div class="flex flex-row"></div></div></div></div></body><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Ych-comission.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_26 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_0, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_1, "./Pages/Auth/Login.vue": __vite_glob_0_2, "./Pages/Auth/Register.vue": __vite_glob_0_3, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_4, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_5, "./Pages/Category/Create.vue": __vite_glob_0_6, "./Pages/Category/Edit.vue": __vite_glob_0_7, "./Pages/Category/Index.vue": __vite_glob_0_8, "./Pages/Dashboard.vue": __vite_glob_0_9, "./Pages/Homepage.vue": __vite_glob_0_10, "./Pages/Member.vue": __vite_glob_0_11, "./Pages/Members/Cart.vue": __vite_glob_0_12, "./Pages/Members/Dashboard.vue": __vite_glob_0_13, "./Pages/Members/PaymentConfirmation.vue": __vite_glob_0_14, "./Pages/Members/Register.vue": __vite_glob_0_15, "./Pages/Members/Transaction.vue": __vite_glob_0_16, "./Pages/Product/Create.vue": __vite_glob_0_17, "./Pages/Product/Index.vue": __vite_glob_0_18, "./Pages/Profile/Edit.vue": __vite_glob_0_19, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_20, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_21, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_22, "./Pages/Transactions/Index.vue": __vite_glob_0_23, "./Pages/Transactions/Show.vue": __vite_glob_0_24, "./Pages/Welcome.vue": __vite_glob_0_25, "./Pages/Ych-comission.vue": __vite_glob_0_26 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
