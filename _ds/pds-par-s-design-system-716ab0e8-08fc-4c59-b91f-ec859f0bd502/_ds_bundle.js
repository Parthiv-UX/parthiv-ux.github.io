/* @ds-bundle: {"format":4,"namespace":"PDSParSDesignSystem_716ab0","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"80d8858f2b01","components/core/Icon.jsx":"05eab68ad91a","components/core/IconButton.jsx":"b6983ffb6164","components/display/Badge.jsx":"e4eaeea13ed6","components/display/Card.jsx":"56ea9cb5965b","components/display/Tabs.jsx":"6f971ef3cdca","components/display/Tag.jsx":"f914a82b9e63","components/feedback/Dialog.jsx":"0d0c4614f3bd","components/feedback/Toast.jsx":"97c93aad905a","components/feedback/Tooltip.jsx":"e9463950cdab","components/forms/Checkbox.jsx":"026dfae1c7c3","components/forms/Input.jsx":"74fb08c237dc","components/forms/Radio.jsx":"f10dffc31aca","components/forms/Select.jsx":"0ce56fc36a19","components/forms/Switch.jsx":"9a30cce89f8b","ui_kits/portfolio/kit-about.jsx":"5d7abfc1df52","ui_kits/portfolio/kit-case-parts.jsx":"a061dedc6606","ui_kits/portfolio/kit-case.jsx":"d347feeb199b","ui_kits/portfolio/kit-contact.jsx":"e55f0e869ab9","ui_kits/portfolio/kit-home.jsx":"2b5fd36ef61f","ui_kits/portfolio/kit-shell.jsx":"ec637ef51085"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PDSParSDesignSystem_716ab0 = window.PDSParSDesignSystem_716ab0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.469.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  ...rest
}) {
  const url = 'url(' + CDN + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true"
  }, rest, {
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: url + ' center/contain no-repeat',
      mask: url + ' center/contain no-repeat',
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 'var(--control-h-sm)',
    px: 14,
    fs: 13,
    gap: 6,
    ic: 16
  },
  md: {
    h: 'var(--control-h-md)',
    px: 18,
    fs: 14,
    gap: 8,
    ic: 18
  },
  lg: {
    h: 'var(--control-h-lg)',
    px: 24,
    fs: 16,
    gap: 10,
    ic: 20
  }
};
const VARIANTS = {
  primary: {
    bg: 'var(--fill-strong)',
    fg: 'var(--on-fill-strong)',
    bd: 'var(--fill-strong)',
    hbg: 'var(--accent)',
    hbd: 'var(--accent)',
    hfg: 'var(--on-accent)'
  },
  accent: {
    bg: 'var(--accent)',
    fg: 'var(--on-accent)',
    bd: 'var(--accent)',
    hbg: 'var(--accent-hover)',
    hbd: 'var(--accent-hover)'
  },
  secondary: {
    bg: 'var(--surface-card)',
    fg: 'var(--text-primary)',
    bd: 'var(--fill-strong)',
    hard: true
  },
  ghost: {
    bg: 'transparent',
    fg: 'var(--text-primary)',
    bd: 'transparent',
    hbg: 'var(--surface-sunken)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const hov = h && !disabled;
  const lift = v.hard && hov && !p;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest, {
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (hov && v.hbd ? v.hbd : v.bd),
      background: hov && v.hbg ? v.hbg : v.bg,
      color: hov && v.hfg ? v.hfg : v.fg,
      font: '500 ' + s.fs + 'px/1 var(--font-sans)',
      letterSpacing: '0.005em',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      boxShadow: lift ? 'var(--shadow-hard-sm)' : 'none',
      transform: lift ? 'translate(-2px,-2px)' : p && !disabled ? 'scale(0.97)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic,
    style: {
      transform: hov && iconRight.startsWith('arrow') ? 'translateX(2px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-spring)'
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const DIM = {
  sm: [32, 16],
  md: [40, 18],
  lg: [52, 22]
};
const V = {
  primary: ['var(--fill-strong)', 'var(--on-fill-strong)', 'var(--fill-strong)', 'var(--accent)'],
  secondary: ['var(--surface-card)', 'var(--text-primary)', 'var(--fill-strong)', 'var(--surface-card)'],
  ghost: ['transparent', 'var(--text-primary)', 'transparent', 'var(--surface-sunken)']
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'circle',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const [d, ic] = DIM[size] || DIM.md;
  const [bg, fg, bd, hbg] = V[variant] || V.ghost;
  const hov = h && !disabled;
  const lift = variant === 'secondary' && hov && !p;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false)
  }, rest, {
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      border: '1px solid ' + (hov && variant === 'primary' ? 'var(--accent)' : bd),
      borderRadius: shape === 'circle' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      background: hov ? hbg : bg,
      color: hov && variant === 'primary' ? 'var(--on-accent)' : fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      boxShadow: lift ? 'var(--shadow-hard-sm)' : 'none',
      transform: lift ? 'translate(-2px,-2px)' : p && !disabled ? 'scale(0.94)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: ic
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--surface-sunken)', 'var(--text-secondary)', 'var(--fill-strong)', 'var(--on-fill-strong)'],
  accent: ['var(--accent-soft)', 'var(--text-accent)', 'var(--accent)', 'var(--on-accent)'],
  success: ['var(--success-soft)', 'var(--success)', 'var(--success)', 'var(--on-status)'],
  warning: ['var(--warning-soft)', 'var(--warning)', 'var(--warning)', 'var(--on-status)'],
  danger: ['var(--danger-soft)', 'var(--danger)', 'var(--danger)', 'var(--on-status)'],
  info: ['var(--info-soft)', 'var(--info)', 'var(--info)', 'var(--on-status)'],
  outline: ['transparent', 'var(--text-primary)', 'var(--fill-strong)', 'var(--on-fill-strong)']
};
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  children
}) {
  const [sb, sf, fb, ff] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-xs)',
      boxShadow: tone === 'outline' && !solid ? 'inset 0 0 0 1px var(--border-default)' : 'none',
      background: solid ? fb : sb,
      color: solid ? ff : sf,
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap'
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Card({
  variant = 'outlined',
  interactive = false,
  padding = 24,
  onClick,
  children,
  style,
  ...rest
}) {
  const [h, setH] = useState(false);
  const lift = interactive && h;
  const base = {
    plain: {
      background: 'var(--surface-card)',
      border: '1px solid transparent'
    },
    outlined: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)'
    },
    ink: {
      background: 'var(--surface-card)',
      border: '1px solid var(--fill-strong)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: '1px solid var(--surface-inverse)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, rest, {
    style: {
      borderRadius: 'var(--radius-md)',
      padding,
      ...base,
      ...(lift ? {
        borderColor: 'var(--fill-strong)',
        boxShadow: 'var(--shadow-hard)',
        transform: 'translate(-3px,-3px)'
      } : {}),
      cursor: interactive ? 'pointer' : undefined,
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-fast) var(--ease-out)',
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline'
}) {
  const [inner, setInner] = useState(defaultValue ?? (items[0] && items[0].id));
  const cur = value ?? inner;
  const pick = id => {
    setInner(id);
    onChange && onChange(id);
  };
  const pill = variant === 'pill';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: pill ? 4 : 24,
      borderBottom: pill ? 'none' : '1px solid var(--border-default)',
      padding: pill ? 4 : 0,
      background: pill ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: pill ? 'var(--radius-pill)' : 0,
      width: pill ? 'fit-content' : undefined
    }
  }, items.map(it => {
    const on = it.id === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => pick(it.id),
      style: pill ? {
        height: 32,
        padding: '0 14px',
        border: 0,
        borderRadius: 999,
        background: on ? 'var(--fill-strong)' : 'transparent',
        color: on ? 'var(--on-fill-strong)' : 'var(--text-secondary)',
        font: '500 13px/1 var(--font-sans)',
        cursor: 'pointer',
        transition: 'all var(--dur-fast) var(--ease-out)'
      } : {
        position: 'relative',
        height: 40,
        padding: 0,
        border: 0,
        background: 'transparent',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        font: '500 14px/1 var(--font-sans)',
        cursor: 'pointer',
        boxShadow: on ? 'inset 0 -2px 0 var(--fill-strong)' : 'none',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        font: '400 11px/1 var(--font-mono)',
        color: on && !pill ? 'var(--accent)' : 'inherit'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
const {
  useState
} = React;
function Tag({
  selected = false,
  onClick,
  onRemove,
  children
}) {
  const [h, setH] = useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 30,
      padding: onRemove ? '0 6px 0 12px' : '0 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (selected || clickable && h ? 'var(--fill-strong)' : 'var(--border-default)'),
      background: selected ? 'var(--fill-strong)' : 'var(--surface-card)',
      color: selected ? 'var(--on-fill-strong)' : 'var(--text-primary)',
      font: '500 13px/1 var(--font-sans)',
      cursor: clickable ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      border: 0,
      background: 'transparent',
      color: 'inherit',
      padding: 2,
      borderRadius: 999,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect
} = React;
function Dialog({
  open,
  onClose,
  eyebrow,
  title,
  children,
  actions,
  width = 520
}) {
  useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--fill-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-overlay)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '400 32px/1.05 var(--font-display)',
      letterSpacing: '-0.01em',
      margin: 0
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 15px/1.55 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 8
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const IC = {
  neutral: 'info',
  success: 'check-circle-2',
  warning: 'alert-triangle',
  danger: 'alert-octagon',
  accent: 'sparkles'
};
function Toast({
  tone = 'neutral',
  title,
  message,
  action,
  onClose
}) {
  const ic = IC[tone] || IC.neutral;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 360,
      maxWidth: '100%',
      padding: '14px 14px 14px 16px',
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-overlay)',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 18,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 14px/1.3 var(--font-sans)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 13px/1.45 var(--font-sans)',
      color: 'var(--text-inverse-muted)'
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      display: 'inline-flex',
      border: 0,
      background: 'transparent',
      color: 'var(--text-inverse-muted)',
      cursor: 'pointer',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  content,
  side = 'top',
  children
}) {
  const [o, setO] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,' + (o ? '-8px' : '-4px') + ')'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,' + (o ? '8px' : '4px') + ')'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(' + (o ? '-8px' : '-4px') + ',-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(' + (o ? '8px' : '4px') + ',-50%)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      padding: '6px 9px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--fill-strong)',
      color: 'var(--on-fill-strong)',
      font: '500 12px/1.2 var(--font-sans)',
      opacity: o ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-out), transform var(--dur-base) var(--ease-out)'
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useState
} = React;
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      font: '400 15px/1.3 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-xs)',
      border: '1.5px solid var(--fill-strong)',
      background: on ? 'var(--fill-strong)' : 'var(--surface-card)',
      color: 'var(--on-fill-strong)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-out)'
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
function Field({
  label,
  hint,
  error,
  id,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Input({
  label,
  hint,
  error,
  icon,
  size = 'md',
  disabled = false,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [f, setF] = useState(false);
  const id = useId();
  const h = size === 'sm' ? 'var(--control-h-sm)' : size === 'lg' ? 'var(--control-h-lg)' : 'var(--control-h-md)';
  const bd = error ? 'var(--danger)' : f ? 'var(--fill-strong)' : 'var(--border-default)';
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    id: id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--text-muted)",
    style: {
      position: 'absolute',
      left: 12,
      top: multiline ? 12 : undefined,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    disabled: disabled,
    rows: multiline ? rows : undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      width: '100%',
      height: multiline ? 'auto' : h,
      padding: multiline ? '10px 12px' : '0 12px',
      paddingLeft: icon ? 38 : 12,
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
      color: 'var(--text-primary)',
      font: '400 15px/1.4 var(--font-sans)',
      outline: 'none',
      boxShadow: f ? '0 0 0 3px ' + (error ? 'var(--danger-soft)' : 'var(--focus-halo)') : 'none',
      resize: multiline ? 'vertical' : undefined,
      opacity: disabled ? 0.6 : 1,
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      ...style
    }
  }))));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
const {
  useState
} = React;
function Radio({
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  direction = 'column',
  disabled = false
}) {
  const [inner, setInner] = useState(defaultValue);
  const cur = value ?? inner;
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 20 : 12
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    const on = cur === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
        font: '400 15px/1.3 var(--font-sans)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: v,
      checked: on,
      disabled: disabled,
      onChange: () => {
        setInner(v);
        onChange && onChange(v);
      },
      style: {
        position: 'absolute',
        opacity: 0,
        width: 0,
        height: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 20,
        flex: 'none',
        borderRadius: 999,
        border: '1.5px solid var(--fill-strong)',
        background: 'var(--surface-card)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 999,
        background: 'var(--accent)',
        transform: on ? 'scale(1)' : 'scale(0)',
        transition: 'transform var(--dur-base) var(--ease-spring)'
      }
    })), l);
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
function Field({
  label,
  hint,
  error,
  id,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
function Select({
  label,
  hint,
  error,
  options = [],
  placeholder,
  disabled = false,
  style,
  ...rest
}) {
  const [f, setF] = useState(false);
  const id = useId();
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    hint: hint,
    error: error,
    id: id
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false)
  }, rest, {
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: 'var(--control-h-md)',
      padding: '0 40px 0 12px',
      border: '1px solid ' + (error ? 'var(--danger)' : f ? 'var(--fill-strong)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      font: '400 15px/1 var(--font-sans)',
      outline: 'none',
      boxShadow: f ? '0 0 0 3px var(--focus-halo)' : 'none',
      cursor: 'pointer',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === 'string' ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useState
} = React;
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      font: '400 15px/1.3 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: on,
    disabled: disabled,
    onChange: () => {
      const n = !on;
      setInner(n);
      onChange && onChange(n);
    },
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      flex: 'none',
      borderRadius: 999,
      border: '1.5px solid var(--fill-strong)',
      background: on ? 'var(--fill-strong)' : 'var(--surface-card)',
      position: 'relative',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2.5,
      left: on ? 18.5 : 2.5,
      width: 16,
      height: 16,
      borderRadius: 999,
      background: on ? 'var(--accent)' : 'var(--fill-strong)',
      transition: 'left var(--dur-base) var(--ease-spring), background var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit-about.jsx
try { (() => {
const {
  Tag: ATag,
  Button: AB
} = window.PDSParSDesignSystem_716ab0;
function About({
  onContact
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '0 var(--margin-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Col, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    label: "",
    ratio: "1/1",
    style: {
      width: 96,
      borderRadius: 999,
      padding: 0
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, null, "About"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '400 clamp(36px,4.4vw,52px)/1.04 var(--font-display)',
      letterSpacing: '-0.02em',
      textWrap: 'balance'
    }
  }, "Researcher by habit, designer by ", /*#__PURE__*/React.createElement("em", null, "trade"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.65 var(--font-sans)',
      color: 'var(--text-secondary)',
      maxWidth: 540
    }
  }, "I've spent seven years across fintech, health and public services. I usually start by watching people use what already exists, because what they do tends to be more useful than what they say."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: 520
    }
  }, ['User research', 'Interaction design', 'Design systems', 'Prototyping', 'Workshops', 'Usability testing'].map(t => /*#__PURE__*/React.createElement(ATag, {
    key: t
  }, t))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '128px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    label: "Timeline",
    title: "Where I've worked"
  }), [['2024 — now', 'Lead UX Researcher', 'Fintech studio'], ['2021 — 2024', 'Senior Product Designer', 'Health SaaS'], ['2019 — 2021', 'UX Designer', 'Agency']].map(([y, r, c]) => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      display: 'grid',
      gridTemplateColumns: '130px 1fr auto',
      gap: 20,
      alignItems: 'baseline',
      padding: '18px 0',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, y), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1.3 var(--font-sans)'
    }
  }, r), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, c))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '128px 0 0'
    }
  }, /*#__PURE__*/React.createElement(Col, {
    w: 1040
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "02",
    label: "Off the clock",
    title: "The rest of the dataset",
    sub: "Film photography, long walks, and a sourdough starter that has outlived two houseplants."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,minmax(0,1fr))',
      gap: 8
    }
  }, ['Trek', 'Film', 'Kitchen', 'Workshop', 'Night sky'].map((l, i) => /*#__PURE__*/React.createElement(Ph, {
    key: l,
    label: l,
    ratio: i % 2 ? '3/4' : '4/5',
    style: {
      alignSelf: 'center'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(AB, {
    onClick: onContact,
    iconRight: "arrow-up-right"
  }, "Work with me")))));
}
Object.assign(window, {
  About
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit-about.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit-case-parts.jsx
try { (() => {
const {
  Icon: XI,
  Badge: XB
} = window.PDSParSDesignSystem_716ab0;
const mono = {
  font: '500 10px/1 var(--font-mono)',
  letterSpacing: '.08em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)'
};
const Body = ({
  children,
  center
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    font: '400 16px/1.7 var(--font-sans)',
    color: 'var(--text-secondary)',
    textWrap: 'pretty',
    textAlign: center ? 'center' : 'left'
  }
}, children);

// Numbered figure: framed placeholder + caption row (number · title · media kind)
function Fig({
  n,
  caption,
  kind = 'Image',
  ratio = '16/9',
  label
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      padding: 5
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    label: label || caption,
    ratio: ratio,
    style: {
      borderRadius: 10
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'baseline',
      font: '400 13px/1.4 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 11px/1 var(--font-mono)',
      color: 'var(--text-primary)'
    }
  }, n), caption), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, kind)));
}

// Chapter opener — centered, short: number + label, one serif line, a lede
function Chapter({
  id,
  n,
  label,
  title,
  lede,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-chapter": id,
    style: {
      paddingTop: 128,
      display: 'flex',
      flexDirection: 'column',
      gap: 48,
      scrollMarginTop: 96
    }
  }, /*#__PURE__*/React.createElement(Col, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...mono,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--border-default)'
    }
  }), label), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(30px,3.4vw,42px)/1.08 var(--font-display)',
      letterSpacing: '-0.015em',
      textWrap: 'balance',
      maxWidth: 600
    }
  }, title), lede && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Body, {
    center: true
  }, lede))), children);
}

// Decision block — subhead left, principle chips; prose right
function Decision({
  title,
  serves = [],
  children
}) {
  return /*#__PURE__*/React.createElement(Col, {
    w: 880,
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '600 17px/1.35 var(--font-sans)',
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, PRINCIPLES.map(([k,, ic]) => {
    const on = serves.includes(k);
    return /*#__PURE__*/React.createElement("span", {
      key: k,
      title: k,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: 22,
        padding: '0 8px',
        borderRadius: 999,
        border: '1px solid ' + (on ? 'var(--border-strong)' : 'var(--border-subtle)'),
        font: '500 11px/1 var(--font-sans)',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        opacity: on ? 1 : .55
      }
    }, /*#__PURE__*/React.createElement(XI, {
      name: ic,
      size: 11
    }), k);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, children));
}
const PRINCIPLES = [['Calm', 'Never make someone feel they did it wrong.', 'feather'], ['Honest', 'Say why we ask for things, before we ask.', 'eye'], ['Forgiving', 'Every step can be paused, resumed, undone.', 'rotate-ccw']];
function Principles() {
  return /*#__PURE__*/React.createElement(Col, {
    w: 880,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 10
    }
  }, PRINCIPLES.map(([t, d, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '18px 18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(XI, {
    name: ic,
    size: 18,
    color: "var(--accent)"
  }), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "0", i + 1)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 24px/1.1 var(--font-display)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-secondary)'
    }
  }, d)))));
}
function Callout({
  label,
  icon = 'lightbulb',
  children
}) {
  return /*#__PURE__*/React.createElement(Col, {
    w: 720,
    style: {
      background: 'var(--accent-soft)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      ...mono,
      fontSize: 11,
      color: 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement(XI, {
    name: icon,
    size: 14
  }), label), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 24px/1.3 var(--font-display)',
      color: 'var(--text-primary)',
      textWrap: 'balance'
    }
  }, children));
}

// Two options compared with + / − lists
function Tradeoff({
  options
}) {
  return /*#__PURE__*/React.createElement(Col, {
    w: 1040,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, options.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Fig, {
    n: o.n,
    caption: o.caption,
    kind: o.kind || 'Prototype',
    ratio: "4/3"
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: '0 4px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, o.pros.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14,
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(XI, {
    name: "plus",
    size: 14,
    color: "var(--success)",
    style: {
      marginTop: 3
    }
  }), t)), o.cons.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 14,
      lineHeight: 1.45,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(XI, {
    name: "minus",
    size: 14,
    color: "var(--danger)",
    style: {
      marginTop: 3
    }
  }), t))), o.chosen && /*#__PURE__*/React.createElement(XB, {
    tone: "accent",
    dot: true
  }, "Shipped"))));
}
function Contents({
  items,
  active,
  onJump
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 96,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      marginBottom: 10
    }
  }, "Contents"), items.map(([id, l]) => {
    const on = active === id;
    return /*#__PURE__*/React.createElement("a", {
      key: id,
      onClick: () => onJump(id),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '5px 0',
        font: '500 13px/1.2 var(--font-sans)',
        textDecoration: 'none',
        cursor: 'pointer',
        color: on ? 'var(--text-primary)' : 'var(--text-muted)',
        transition: 'color var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: on ? 14 : 6,
        height: 1,
        background: on ? 'var(--accent)' : 'var(--border-default)',
        transition: 'width var(--dur-base) var(--ease-out)'
      }
    }), l);
  }));
}
Object.assign(window, {
  Fig,
  Chapter,
  Decision,
  Principles,
  Callout,
  Tradeoff,
  Contents,
  Body,
  mono,
  PRINCIPLES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit-case-parts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit-case.jsx
try { (() => {
const {
  Button: CB,
  Badge: CBadge,
  Icon: CIcon
} = window.PDSParSDesignSystem_716ab0;
const TOC = [['overview', 'Overview'], ['highlights', 'Highlights'], ['context', 'Context'], ['problem', 'The problem'], ['research', 'Research'], ['design', 'Design'], ['result', 'Result'], ['retro', 'Retrospective']];
function useActive(ids) {
  const [a, setA] = React.useState(ids[0]);
  React.useEffect(() => {
    const on = () => {
      let cur = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200) cur = id;
      }
      setA(cur);
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    on();
    return () => window.removeEventListener('scroll', on);
  }, []);
  return a;
}
function useWide() {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const r = () => setW(window.innerWidth);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  return w >= 1180;
}
function CaseStudy({
  p,
  onBack,
  onNext
}) {
  const active = useActive(TOC.map(t => t[0]));
  const wide = useWide();
  const jump = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 88,
      behavior: 'smooth'
    });
  };
  const next = PROJECTS.filter(x => !x.hidden)[(PROJECTS.filter(x => !x.hidden).findIndex(x => x.id === p.id) + 1) % 3];
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '0 var(--margin-page)',
      position: 'relative'
    }
  }, wide && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--margin-page)',
      top: 0,
      bottom: 0,
      width: 160
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 96,
      paddingTop: 520
    }
  }, /*#__PURE__*/React.createElement(Contents, {
    items: TOC,
    active: active,
    onJump: jump
  }))), /*#__PURE__*/React.createElement("header", {
    id: "overview",
    style: {
      paddingTop: 72
    }
  }, /*#__PURE__*/React.createElement(Col, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: '500 13px/1 var(--font-sans)',
      color: 'var(--text-muted)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "arrow-left",
    size: 14
  }), "All work"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      fontSize: 11
    }
  }, p.client, " \u2014 ", p.year), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '400 clamp(36px,4.6vw,56px)/1.04 var(--font-display)',
      letterSpacing: '-0.02em',
      textWrap: 'balance'
    }
  }, p.full)), /*#__PURE__*/React.createElement(Col, {
    w: 1040,
    style: {
      paddingTop: 48
    }
  }, /*#__PURE__*/React.createElement(Fig, {
    n: "0.0",
    caption: "The new onboarding, end to end",
    kind: "Video loop",
    ratio: "16/8",
    label: "Banner"
  })), /*#__PURE__*/React.createElement(Col, {
    w: 880,
    style: {
      paddingTop: 56,
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.5fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['My role', 'Lead designer & researcher — discovery, interaction design, prototyping, usability testing'], ['Team', '2 PM · 5 engineers · 1 content designer'], ['Timeline', '12 weeks · shipped Mar 2026']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: mono
  }, k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      font: '400 14px/1.5 var(--font-sans)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "Overview"), /*#__PURE__*/React.createElement(Body, null, "Of the people who started sign-up, 39% stopped at the same step: identity verification. The team had already tried shorter copy and a progress bar. Neither changed the drop-off."), /*#__PURE__*/React.createElement(Body, null, "I led the research and the redesign. Our sessions suggested people weren't confused by the step \u2014 they didn't trust it. Rebuilding the flow around that raised completion from 61% to 84% over the following eight weeks.")))), /*#__PURE__*/React.createElement("section", {
    id: "highlights",
    style: {
      paddingTop: 96,
      scrollMarginTop: 96
    }
  }, /*#__PURE__*/React.createElement(Col, {
    w: 1040,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      ...mono,
      fontSize: 11,
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "sparkles",
    size: 14,
    color: "var(--accent)"
  }), "Highlights"), /*#__PURE__*/React.createElement(Fig, {
    n: "0.1",
    caption: "Identity step \u2014 before and after",
    kind: "Image",
    ratio: "16/9"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Fig, {
    n: "0.2",
    caption: "Resume-anywhere state",
    ratio: "4/5"
  }), /*#__PURE__*/React.createElement(Fig, {
    n: "0.3",
    caption: "ID capture guidance",
    kind: "Video loop",
    ratio: "4/5"
  })))), /*#__PURE__*/React.createElement(Chapter, {
    id: "context",
    n: "01",
    label: "Context",
    title: "Every lost sign-up had already been paid for.",
    lede: "Marketing was buying installs at a steady rate. More than a third of those people were leaving at one screen, before they ever saw the product."
  }, /*#__PURE__*/React.createElement(Col, {
    w: 1040,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
      gap: 10
    }
  }, [['39%', 'of starters left at the identity step'], ['4.2 min', 'median time on that step before leaving'], ['1 in 3', 'who finished had contacted support first'], ['61%', 'completed sign-up, start to finish']].map(([a, b]) => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 24px/1 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, b))))), /*#__PURE__*/React.createElement(Chapter, {
    id: "problem",
    n: "02",
    label: "The problem",
    title: "The step couldn't be removed, only reconsidered.",
    lede: "Regulators require every check in the flow. So the question wasn't whether to ask for an ID and a selfie \u2014 it was how to ask."
  }, /*#__PURE__*/React.createElement(Col, {
    w: 880,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px 32px'
    }
  }, [['scale', 'Regulation fixed the steps', 'Document, selfie and address checks were all mandatory.'], ['smartphone', 'Mobile-only', 'No desktop fallback; the camera had to just work.'], ['clock', 'Twelve weeks', 'Shipping before the next marketing push.'], ['shield-alert', 'A new name', 'Most people had never heard of the bank before downloading the app.']].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: ic,
    size: 18,
    color: "var(--text-muted)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.3 var(--font-sans)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Callout, {
    label: "The challenge",
    icon: "target"
  }, "Keep every mandatory check, and give people enough context to be comfortable completing it."), /*#__PURE__*/React.createElement(Col, {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "Principles I designed against")), /*#__PURE__*/React.createElement(Principles, null)), /*#__PURE__*/React.createElement(Chapter, {
    id: "research",
    n: "03",
    label: "Research",
    title: "Watching people sign up revealed a different problem.",
    lede: "I ran 24 in-person sessions, mostly at kitchen tables, on participants' own phones. The analytics said people were stuck. The sessions suggested they were suspicious."
  }, /*#__PURE__*/React.createElement(Col, {
    w: 1040
  }, /*#__PURE__*/React.createElement(Fig, {
    n: "3.0",
    caption: "Journey map \u2014 where confidence dipped",
    ratio: "21/9"
  })), /*#__PURE__*/React.createElement(Decision, {
    title: "What people said and what they did didn't match.",
    serves: ['Honest']
  }, /*#__PURE__*/React.createElement(Body, null, "The exit survey said \"too long\". In sessions, 9 of 24 participants paused at the selfie screen, switched to their browser, and searched the bank's name followed by \"scam\"."), /*#__PURE__*/React.createElement(Body, null, "If the problem was trust, shortening the flow wouldn't help. Explaining it might.")), /*#__PURE__*/React.createElement(Callout, {
    label: "Key insight"
  }, "People weren't leaving because the step was hard. They were leaving because nothing told them ", /*#__PURE__*/React.createElement("em", null, "why"), " a bank they'd just heard of needed their face.")), /*#__PURE__*/React.createElement(Chapter, {
    id: "design",
    n: "04",
    label: "Design",
    title: "The shorter flow wasn't the better one.",
    lede: "The version we shipped has one more screen than the original. That screen explains what happens next, and why."
  }, /*#__PURE__*/React.createElement(Decision, {
    title: "Explain before asking.",
    serves: ['Honest', 'Calm']
  }, /*#__PURE__*/React.createElement(Body, null, "A short screen now comes before the camera. It says what we'll check, why the law requires it, and who sees the photo. The legal text is one tap away for anyone who wants it.")), /*#__PURE__*/React.createElement(Tradeoff, {
    options: [{
      n: '4.1',
      caption: 'Guided, one step per screen',
      pros: ['Fewest retakes across our test sessions', 'Participants described it as "careful"'],
      cons: ['Two extra taps for confident users'],
      chosen: true
    }, {
      n: '4.2',
      caption: 'Single scrolling form',
      pros: ['Quickest for people who had done this before'],
      cons: ['Photo errors only appeared at the end', 'The camera permission prompt arrived without warning']
    }]
  }), /*#__PURE__*/React.createElement(Decision, {
    title: "Leave and come back.",
    serves: ['Forgiving', 'Calm']
  }, /*#__PURE__*/React.createElement(Body, null, "Several participants left to find their ID and came back to an empty form. Progress now saves after every step, so leaving mid-selfie returns you to the same screen.")), /*#__PURE__*/React.createElement(Col, {
    w: 1040
  }, /*#__PURE__*/React.createElement(Fig, {
    n: "4.3",
    caption: "Resume states across the flow",
    kind: "Prototype",
    ratio: "16/8"
  }))), /*#__PURE__*/React.createElement(Chapter, {
    id: "result",
    n: "05",
    label: "Result",
    title: "Completion rose, and held for eight weeks.",
    lede: "Compared with the eight weeks before launch, using the same acquisition channels. This is an observed change, not a controlled experiment."
  }, /*#__PURE__*/React.createElement(Col, {
    w: 880,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
      gap: 10
    }
  }, [['arrow-up-right', '84%', 'of starters completed sign-up, up from 61%'], ['arrow-down-right', '−38%', 'median time from install to first deposit'], ['arrow-down-right', '−71%', 'support tickets tagged "onboarding"']].map(([i, a, b]) => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      padding: '18px',
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-md)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '600 26px/1 var(--font-sans)',
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: i,
    size: 18,
    color: "var(--accent)"
  }), a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, b)))), /*#__PURE__*/React.createElement(Col, {
    w: 680,
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'italic 400 28px/1.25 var(--font-display)',
      textWrap: 'balance'
    }
  }, "\u201CI didn't notice the onboarding. That's the compliment.\u201D"), /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "Participant 17, post-launch test"))), /*#__PURE__*/React.createElement(Chapter, {
    id: "retro",
    n: "06",
    label: "Retrospective",
    title: "What I'd keep, and what I'd change."
  }, /*#__PURE__*/React.createElement(Col, {
    w: 880,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, [['In person caught what remote missed', 'Our earlier remote tests never showed people leaving the app to search. The first in-person session did.'], ['The framing decided the fixes', 'Treating it as a usability problem would have produced a tidier form. Treating it as a trust problem changed what we built.'], ['Compliance helped more than expected', 'We wrote the explainer with our compliance partner. Approval took two days instead of the usual two weeks.'], ['What I would test next', 'About half of resumed sessions started from a reminder email. We never designed or tested that email properly.']].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...mono,
      color: 'var(--text-accent)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px/1.3 var(--font-sans)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.55,
      color: 'var(--text-secondary)'
    }
  }, d))))), /*#__PURE__*/React.createElement(Col, {
    w: 880,
    style: {
      paddingTop: 96
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNext(next),
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      padding: '24px 4px',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)',
      textDecoration: 'none',
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: mono
  }, "Next case study"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 28px/1.1 var(--font-display)'
    }
  }, next.full)), /*#__PURE__*/React.createElement(CIcon, {
    name: "arrow-right",
    size: 22
  }))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit-case.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit-contact.jsx
try { (() => {
const {
  Dialog: KD,
  Input: KI,
  Select: KS,
  Checkbox: KC,
  Button: KB
} = window.PDSParSDesignSystem_716ab0;
function ContactDialog({
  open,
  onClose,
  onSent
}) {
  return /*#__PURE__*/React.createElement(KD, {
    open: open,
    onClose: onClose,
    eyebrow: "Say hi",
    title: /*#__PURE__*/React.createElement("span", null, "What are you ", /*#__PURE__*/React.createElement("em", null, "working on"), "?"),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(KB, {
      variant: "ghost",
      onClick: onClose
    }, "Later"), /*#__PURE__*/React.createElement(KB, {
      iconRight: "send",
      onClick: onSent
    }, "Send message"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(KI, {
    label: "Name",
    placeholder: "Ada Lovelace"
  }), /*#__PURE__*/React.createElement(KI, {
    label: "Email",
    icon: "mail",
    placeholder: "ada@studio.com"
  })), /*#__PURE__*/React.createElement(KS, {
    label: "What's this about?",
    placeholder: "Choose one",
    options: ['Full-time role', 'Freelance project', 'Research study', 'Just saying hi']
  }), /*#__PURE__*/React.createElement(KI, {
    label: "Message",
    multiline: true,
    rows: 4,
    placeholder: "A few lines is plenty \u2014 what's happening, and what you've already tried."
  }), /*#__PURE__*/React.createElement(KC, {
    label: "Send me the case-study PDF too"
  })));
}
Object.assign(window, {
  ContactDialog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit-contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit-home.jsx
try { (() => {
const {
  Button: HB,
  Badge: HBadge,
  Icon: HIcon,
  Tag: HTag
} = window.PDSParSDesignSystem_716ab0;
const PROJECTS = [{
  id: 'bank',
  n: '01',
  title: 'Banking onboarding',
  full: 'Why new customers stopped at the identity check',
  client: 'Fintech',
  year: '2026',
  kind: 'Research',
  stat: 'Completion 61% → 84%',
  r: '4/3',
  desc: 'Sign-ups were dropping at the identity check. Watching people sign up suggested the cause was trust, not usability.'
}, {
  id: 'health',
  n: '02',
  title: 'Care dashboard',
  full: 'What the paper list did better than the dashboard',
  client: 'Health SaaS',
  year: '2025',
  kind: 'Product',
  stat: 'SUS 64 → 88, 18 nurses',
  r: '4/5',
  desc: 'Nurses kept a paper list next to the dashboard built to replace it. We went to find out what the paper did better.'
}, {
  id: 'ds',
  n: '03',
  title: 'Design system audit',
  full: 'Nine versions of the same button, and which differences mattered',
  client: 'SaaS',
  year: '2025',
  kind: 'Systems',
  stat: '212 components mapped',
  r: '1/1',
  desc: 'Nine squads had built nine versions of the same button. I mapped where they differed and which differences mattered.'
}, {
  hidden: 1,
  id: 'transit',
  n: '04',
  title: 'Ticket kiosk',
  full: 'Where people hesitated at the ticket machine',
  client: 'Public sector',
  year: '2024',
  kind: 'Research',
  stat: 'n = 41 field interviews',
  r: '4/5',
  locked: true
}, {
  id: 'voice',
  n: '05',
  title: 'Voice notes study',
  full: 'Why people send voice notes they wouldn\'t want to receive',
  client: 'Academic',
  year: '2024',
  kind: 'Research',
  stat: 'Mixed-methods, n = 212',
  r: '4/3'
}, {
  id: 'checkout',
  n: '06',
  title: 'Checkout flow',
  full: 'Removing one decision from checkout',
  client: 'Retail',
  year: '2023',
  kind: 'Product',
  stat: 'Checkout completion +9 pts',
  r: '1/1'
}];
function Tile({
  p,
  onOpen
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => onOpen(p),
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      breakInside: 'avoid',
      marginBottom: 12,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      padding: 5,
      cursor: 'pointer',
      transform: h ? 'translateY(-3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    label: p.stat,
    ratio: p.r,
    style: {
      borderRadius: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '11px 8px 7px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      font: '500 13px/1 var(--font-sans)'
    }
  }, p.title, p.locked && /*#__PURE__*/React.createElement(HIcon, {
    name: "lock",
    size: 12,
    color: "var(--text-muted)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 10px/1 var(--font-mono)',
      color: h ? 'var(--text-accent)' : 'var(--text-muted)',
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, p.client)));
}
function CaseRow({
  p,
  onOpen,
  flip
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'grid',
      gridTemplateColumns: flip ? 'minmax(0,1.25fr) minmax(0,1fr)' : 'minmax(0,1fr) minmax(0,1.25fr)',
      gap: 6,
      padding: 6,
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid ' + (h ? 'var(--border-default)' : 'transparent'),
      transition: 'border-color var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: flip ? 2 : 1,
      background: 'var(--surface-card)',
      borderRadius: 10,
      padding: '28px 28px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "outline"
  }, p.kind), /*#__PURE__*/React.createElement(HBadge, {
    tone: "outline"
  }, p.year)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: '400 28px/1.08 var(--font-display)',
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, p.full), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 14px/1.55 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, p.desc)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HB, {
    size: "sm",
    variant: "secondary",
    iconRight: "arrow-up-right",
    onClick: () => onOpen(p)
  }, "Read case study"))), /*#__PURE__*/React.createElement(Ph, {
    label: "Project hero",
    ratio: "5/4",
    style: {
      order: flip ? 1 : 2,
      borderRadius: 10,
      height: '100%'
    }
  }));
}
function Home({
  onOpen,
  onContact
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '0 var(--margin-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '112px 0 128px'
    }
  }, /*#__PURE__*/React.createElement(Col, {
    w: 760,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: '500 11px/1 var(--font-mono)',
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: 'var(--success)',
      boxShadow: '0 0 0 3px var(--success-soft)'
    }
  }), "Parthiv \u2014 UX design & research \xB7 open to work"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '400 clamp(38px,4.8vw,58px)/1.04 var(--font-display)',
      letterSpacing: '-0.02em',
      textWrap: 'balance'
    }
  }, "Most problems I work on turn out to be ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--text-accent)'
    }
  }, "a different problem"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 16px/1.6 var(--font-sans)',
      color: 'var(--text-secondary)',
      maxWidth: 520,
      textWrap: 'pretty'
    }
  }, "I'm Parthiv, a UX designer and researcher. I watch how people actually use things, work out what's going wrong, and design from there."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(HB, {
    variant: "accent",
    iconRight: "arrow-down",
    onClick: () => window.scrollTo({
      top: 620,
      behavior: 'smooth'
    })
  }, "See the work"), /*#__PURE__*/React.createElement(HB, {
    variant: "ghost",
    onClick: onContact
  }, "Say hello")))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(Col, {
    w: 1040
  }, /*#__PURE__*/React.createElement(SectionHead, {
    index: "01",
    label: "Case studies",
    title: "What happened, and why it mattered",
    sub: "Three projects, including the parts that didn't work the first time."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, PROJECTS.slice(0, 3).map((p, i) => /*#__PURE__*/React.createElement(CaseRow, {
    key: p.id,
    p: p,
    onOpen: onOpen,
    flip: i % 2 === 1
  }))))));
}
Object.assign(window, {
  Home,
  PROJECTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/kit-shell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Tooltip
} = window.PDSParSDesignSystem_716ab0;
const Label = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    font: 'var(--type-label)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    ...style
  }
}, children);
const Ph = ({
  label = 'Image',
  ratio = '4/3',
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    aspectRatio: ratio,
    borderRadius: 'var(--radius-md)',
    background: 'var(--surface-card)',
    backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 10px, rgba(128,128,128,.08) 10px 11px)',
    display: 'flex',
    alignItems: 'flex-end',
    padding: 14,
    ...style
  }
}, /*#__PURE__*/React.createElement(Label, null, label));
const Eyebrow = ({
  children,
  center
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: center ? 'center' : 'flex-start',
    font: 'var(--type-label)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    color: 'var(--text-muted)'
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    width: 6,
    height: 6,
    borderRadius: 999,
    background: 'var(--accent)'
  }
}), children);
const Col = ({
  w = 720,
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: w,
    margin: '0 auto',
    width: '100%',
    ...style
  }
}, children);
function SectionHead({
  index,
  label,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 14,
      marginBottom: 44
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, index && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--border-default)'
    }
  }), label), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '400 clamp(30px,3.4vw,40px)/1.08 var(--font-display)',
      letterSpacing: '-0.015em',
      textWrap: 'balance',
      maxWidth: 560
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.55 var(--font-sans)',
      color: 'var(--text-muted)',
      maxWidth: 460
    }
  }, sub));
}
function Nav({
  page,
  go,
  onContact,
  theme,
  toggleTheme
}) {
  const links = [['home', 'Work'], ['about', 'About']];
  const active = id => page === id || id === 'home' && page === 'case';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'color-mix(in srgb, var(--bg-page) 82%, transparent)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '0 var(--margin-page)',
      height: 72,
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => go('home'),
    style: {
      font: '400 26px/1 var(--font-display)',
      letterSpacing: '-0.02em',
      textDecoration: 'none',
      cursor: 'pointer',
      color: 'var(--text-primary)'
    }
  }, "Parthiv", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, ".")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 2,
      padding: 3,
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)'
    }
  }, links.map(([id, l]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    onClick: () => go(id),
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      font: '500 13px/1 var(--font-sans)',
      textDecoration: 'none',
      cursor: 'pointer',
      background: active(id) ? 'var(--surface-sunken)' : 'transparent',
      color: active(id) ? 'var(--text-primary)' : 'var(--text-muted)',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    onClick: onContact,
    style: {
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      font: '500 13px/1 var(--font-sans)',
      textDecoration: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: theme === 'dark' ? 'Light mode' : 'Dark mode',
    side: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: theme === 'dark' ? 'sun' : 'moon',
    label: "Toggle theme",
    size: "sm",
    onClick: toggleTheme
  })), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "accent",
    onClick: onContact,
    iconRight: "arrow-up-right"
  }, "Let's talk"))));
}
const ACCENTS = [['link', 'var(--link-light)'], ['mono', 'var(--mono-light)'], ['clay', 'var(--clay-light)'], ['par', 'var(--par-light)'], ['marker', 'var(--marker-light)']];
function Footer({
  onCopy,
  accent,
  setAccent
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--band-bg)',
      color: 'var(--band-fg)',
      marginTop: 'var(--space-11)'
    },
    "data-theme": "dark",
    "data-accent": accent
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto',
      padding: '128px var(--margin-page) 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 112
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Inbox open"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '400 clamp(40px,5vw,64px)/1.02 var(--font-display)',
      letterSpacing: '-0.02em',
      textWrap: 'balance',
      maxWidth: 720
    }
  }, "If something is confusing people, ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--text-accent)'
    }
  }, "I'd like to find out why.")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '400 15px/1.5 var(--font-sans)',
      color: 'var(--text-muted)'
    }
  }, "Open to full-time roles, freelance projects and research collaborations."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    iconLeft: "copy",
    onClick: onCopy
  }, "hello@parthiv.design"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconLeft: "file-text"
  }, "R\xE9sum\xE9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
      borderTop: '1px solid var(--border-default)',
      paddingTop: 20,
      font: '400 12px/1 var(--font-mono)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Parthiv"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, "Accent ", ACCENTS.map(([k, c]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    title: k,
    onClick: () => setAccent(k),
    style: {
      width: 16,
      height: 16,
      borderRadius: 999,
      border: 0,
      padding: 0,
      cursor: 'pointer',
      background: c,
      boxShadow: accent === k ? '0 0 0 2px var(--band-bg), 0 0 0 3px var(--text-primary)' : 'inset 0 0 0 1px rgba(255,255,255,.2)'
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit'
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit'
    }
  }, "Read.cv"), /*#__PURE__*/React.createElement("a", {
    style: {
      color: 'inherit'
    }
  }, "Dribbble")))));
}
Object.assign(window, {
  Label,
  Ph,
  Nav,
  Footer,
  Eyebrow,
  Col,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/kit-shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
