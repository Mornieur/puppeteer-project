var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var _this = this;
var puppeteer = require('puppeteer');

var captureScreenshots = function () {
  return __awaiter(_this, void 0, void 0, function () {
    var browser, _i, projects_1, project, page_1, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, puppeteer.launch()];
        case 1:
          browser = _a.sent();
          _a.label = 2;
        case 2:
          _a.trys.push([2, 12, 13, 15]);
          (_i = 0), (projects_1 = projects);
          _a.label = 3;
        case 3:
          if (!(_i < projects_1.length)) return [3 /*break*/, 11];
          project = projects_1[_i];
          return [4 /*yield*/, browser.newPage()];
        case 4:
          page_1 = _a.sent();
          return [
            4 /*yield*/,
            page_1.setViewport({ width: 1000, height: 500 }),
          ];
        case 5:
          _a.sent();
          return [4 /*yield*/, page_1.goto(project.url)];
        case 6:
          _a.sent();
          return [4 /*yield*/, page_1.waitForTimeout(2000)];
        case 7:
          _a.sent();
          return [
            4 /*yield*/,
            page_1.screenshot({
              path: 'public/screenshots/'.concat(project.id, '.png'),
              fullPage: true,
            }),
          ];
        case 8:
          _a.sent();
          return [4 /*yield*/, page_1.close()];
        case 9:
          _a.sent();
          _a.label = 10;
        case 10:
          _i++;
          return [3 /*break*/, 3];
        case 11:
          console.log('Screenshots capturados com sucesso!');
          return [3 /*break*/, 15];
        case 12:
          error_1 = _a.sent();
          console.error('Erro ao capturar os screenshots:', error_1);
          return [3 /*break*/, 15];
        case 13:
          return [4 /*yield*/, browser.close()];
        case 14:
          _a.sent();
          return [7 /*endfinally*/];
        case 15:
          return [2 /*return*/];
      }
    });
  });
};
captureScreenshots();
