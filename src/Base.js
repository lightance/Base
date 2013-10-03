/**
 * The base class with some useful features.
 *
 * @author Lightance.com
 * @license MIT License
 */
var Base = createClass({

  _options: {}, // настройки

  $constructor: function(options)
  {
    this.setOptions(options);
  },
  //~

  getOptions: function()
  {
    return this._options;
  },
  //~

  /**
   * Задать настройки объекта
   *
   * @param options <associative array> - задаваемые настройки
   *   если null, то все настройки будут сброшены
   */
  setOptions: function(options)
  {
    // сброс настроек
    if (options===null) {
      this._options = {};
      return;
    }

    // установка настроек
    if (!options) {
      return;
    }
    for (var k in options) {
      this._options[k] = options[k];
    }
  },
  //~

  /**
   * Задать настройки объекта по умолчанию
   * В отличии от setOptions, не переписывают значение, если оно уже задано
   *
   * @param options <associative array> - задаваемые настройки
   */
  setDefaultOptions: function(options)
  {
    if (!options) {
      return;
    }

    for (var k in options) {
      if (!this._options.hasOwnProperty(k)) {
        this._options[k] = options[k];
      }
    }
  }
  //~

});
//~