(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cepa-agregar"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["tipoG"],
  data: function data() {
    return {
      parametros: {
        codigo: "",
        grupo_microbiano: 1,
        genero: 1,
        especie: 1,
        phylum: 1,
        clase: 1,
        orden: 1,
        reino: 1,
        division: 1,
        familia: 1,
        estado: "",
        origen: "",
        publicar: false,
        otras_caracteristicas: ""
      },
      errors: [],
      mostrarGrupos: true
    };
  },
  methods: {
    agregar: function agregar() {
      var _this = this;

      axios.post("/cepas/agregar", this.parametros).then(function (res) {
        _this.redirect();
      })["catch"](function (error) {
        if (error.response) {
          _this.errors = [];
          _this.errors = error.response.data.errors; //console.log(error.response.data);
          //console.log(error.response.status);
          //console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }

        console.log(error.config);
      });
    },
    ocultarGrupoMicrobiano: function ocultarGrupoMicrobiano() {
      if (this.tipoG === 0) {
        this.mostrarGrupos = true;
      } else {
        this.mostrarGrupos = false;
      }
    },
    redirect: function redirect() {
      switch (this.tipoG) {
        case 0:
          this.$router.push("/cepas");
          break;

        case 1:
          this.$router.push("/cepas-bacterias");
          break;

        case 2:
          this.$router.push("/cepas-hongos");
          break;

        case 3:
          this.$router.push("/cepas-levaduras");
          break;

        case 4:
          this.$router.push("/cepas-actinomicetos");
          break;
      }
    }
  },
  computed: _objectSpread({}, vuex__WEBPACK_IMPORTED_MODULE_0__["default"].mapGetters(["getGrupos", "getGeneros", "getEspecies", "getPhylums", "getOrdens", "getReinos", "getDivisiones", "getClases", "getFamilias"])),
  mounted: function mounted() {
    this.$emit("rutaHijo", window.location.pathname);
    this.ocultarGrupoMicrobiano();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("ul", {
      staticClass:
        "body-tabs body-tabs-layout tabs-animated body-tabs-animated nav"
    }),
    _vm._v(" "),
    _c("div", { staticClass: "tabs-animation" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row justify-content-md-center" }, [
          _c("div", { staticClass: "col col-sm-8" }, [
            _c("div", { staticClass: "main-card mb-3 card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Agregar Nueva Cepa")
                ]),
                _vm._v(" "),
                _vm.getGrupos != "" &&
                _vm.getGeneros != "" &&
                _vm.getEspecies != ""
                  ? _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.agregar($event)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "codigo" } }, [
                              _vm._v("Codigo")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.codigo,
                                  expression: "parametros.codigo"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "codigo",
                                id: "codigo",
                                placeholder: "Codigo ...",
                                type: "text",
                                required: ""
                              },
                              domProps: { value: _vm.parametros.codigo },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.parametros,
                                    "codigo",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.codigo
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors.codigo[0]))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _vm.mostrarGrupos
                          ? _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c(
                                  "label",
                                  { attrs: { for: "grupo_microbiano" } },
                                  [_vm._v("Grupo Microbiano")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.grupo_microbiano,
                                        expression:
                                          "parametros.grupo_microbiano"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "select",
                                      id: "grupo_microbiano"
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.parametros,
                                          "grupo_microbiano",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.getGrupos, function(gm, index) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: gm.id }
                                      },
                                      [_vm._v(_vm._s(gm.nombre))]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "genero" } }, [
                              _vm._v("Genero")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.genero,
                                    expression: "parametros.genero"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "genero" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "genero",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getGeneros, function(g, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: g.id } },
                                  [_vm._v(_vm._s(g.nombre))]
                                )
                              }),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "especie" } }, [
                              _vm._v("Especie")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.parametros.especie,
                                    expression: "parametros.especie"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: { name: "select", id: "especie" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.parametros,
                                      "especie",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              _vm._l(_vm.getEspecies, function(e, index) {
                                return _c(
                                  "option",
                                  { key: index, domProps: { value: e.id } },
                                  [_vm._v(_vm._s(e.nombre))]
                                )
                              }),
                              0
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.parametros.grupo_microbiano === 3
                          ? _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "division" } }, [
                                  _vm._v("Division")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.division,
                                        expression: "parametros.division"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "select", id: "division" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.parametros,
                                          "division",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.getDivisiones, function(d, index) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: d.id } },
                                      [_vm._v(_vm._s(d.nombre))]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.parametros.grupo_microbiano === 4
                          ? _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "reino" } }, [
                                  _vm._v("Reino")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.reino,
                                        expression: "parametros.reino"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "select", id: "reino" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.parametros,
                                          "reino",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.getReinos, function(r, index) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: r.id } },
                                      [_vm._v(_vm._s(r.nombre))]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.parametros.grupo_microbiano === 2 ||
                        _vm.parametros.grupo_microbiano === 4
                          ? _c("div", [
                              _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c("label", { attrs: { for: "phylum" } }, [
                                    _vm._v("Phylum")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.parametros.phylum,
                                          expression: "parametros.phylum"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { name: "select", id: "phylum" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.parametros,
                                            "phylum",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getPhylums, function(p, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: p.id }
                                        },
                                        [_vm._v(_vm._s(p.nombre))]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.parametros.grupo_microbiano === 2 ||
                        _vm.parametros.grupo_microbiano === 3 ||
                        _vm.parametros.grupo_microbiano === 4
                          ? _c("div", [
                              _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c("label", { attrs: { for: "clase" } }, [
                                    _vm._v("Clase")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.parametros.clase,
                                          expression: "parametros.clase"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { name: "select", id: "clase" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.parametros,
                                            "clase",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getClases, function(c, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: c.id }
                                        },
                                        [_vm._v(_vm._s(c.nombre))]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c("label", { attrs: { for: "orden" } }, [
                                    _vm._v("Orden")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.parametros.orden,
                                          expression: "parametros.orden"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { name: "select", id: "orden" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.parametros,
                                            "orden",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.getOrdens, function(o, index) {
                                      return _c(
                                        "option",
                                        {
                                          key: index,
                                          domProps: { value: o.id }
                                        },
                                        [_vm._v(_vm._s(o.nombre))]
                                      )
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.parametros.grupo_microbiano === 2 ||
                        _vm.parametros.grupo_microbiano === 3
                          ? _c(
                              "div",
                              { staticClass: "position-relative form-group" },
                              [
                                _c("label", { attrs: { for: "familia" } }, [
                                  _vm._v("Familia")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.parametros.familia,
                                        expression: "parametros.familia"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: { name: "select", id: "familia" },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.parametros,
                                          "familia",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  _vm._l(_vm.getFamilias, function(f, index) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: f.id } },
                                      [_vm._v(_vm._s(f.nombre))]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "estado" } }, [
                              _vm._v("Estado")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.estado,
                                  expression: "parametros.estado"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "estado",
                                id: "estado",
                                placeholder: "Estado ...",
                                type: "text",
                                required: ""
                              },
                              domProps: { value: _vm.parametros.estado },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.parametros,
                                    "estado",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.estado
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors.estado[0]))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c("label", { attrs: { for: "origen" } }, [
                              _vm._v("Origen")
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.origen,
                                  expression: "parametros.origen"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "origen",
                                id: "origen",
                                placeholder: "Origen ...",
                                type: "text",
                                required: ""
                              },
                              domProps: { value: _vm.parametros.origen },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.parametros,
                                    "origen",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm.errors.origen
                              ? _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(_vm.errors.origen[0]))
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "position-relative form-group" },
                          [
                            _c(
                              "label",
                              { attrs: { for: "otras_caracteristicas" } },
                              [_vm._v("Otras Caracteristicas")]
                            ),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.otras_caracteristicas,
                                  expression: "parametros.otras_caracteristicas"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "text",
                                id: "otras_caracteristicas"
                              },
                              domProps: {
                                value: _vm.parametros.otras_caracteristicas
                              },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.parametros,
                                    "otras_caracteristicas",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "custom-checkbox custom-control" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.parametros.publicar,
                                  expression: "parametros.publicar"
                                }
                              ],
                              staticClass: "custom-control-input",
                              attrs: { type: "checkbox", id: "publicar" },
                              domProps: {
                                checked: Array.isArray(_vm.parametros.publicar)
                                  ? _vm._i(_vm.parametros.publicar, null) > -1
                                  : _vm.parametros.publicar
                              },
                              on: {
                                change: function($event) {
                                  var $$a = _vm.parametros.publicar,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.parametros,
                                          "publicar",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.parametros,
                                          "publicar",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(_vm.parametros, "publicar", $$c)
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "custom-control-label",
                                attrs: { for: "publicar" }
                              },
                              [_vm._v("Desea publicar la cepa?")]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("button", { staticClass: "mt-1 btn btn-primary" }, [
                          _vm._v("Guardar")
                        ])
                      ]
                    )
                  : _c("div", [_vm._v("Cargando...")])
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/cepas/FormCepasComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/cepas/FormCepasComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormCepasComponent_vue_vue_type_template_id_9c23e2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true& */ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true&");
/* harmony import */ var _FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormCepasComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormCepasComponent_vue_vue_type_template_id_9c23e2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormCepasComponent_vue_vue_type_template_id_9c23e2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9c23e2ca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/cepas/FormCepasComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCepasComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_template_id_9c23e2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/cepas/FormCepasComponent.vue?vue&type=template&id=9c23e2ca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_template_id_9c23e2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormCepasComponent_vue_vue_type_template_id_9c23e2ca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);