/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/px-demo-code-editor.js';
import '../px-datetime-field.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- Header -->
    <px-demo-header module-name="px-datetime-field" description="This component allows the user to select a date and time precisely to the second or millisecond.
          The counter represents when the px-datetime-field event/date property of the
        field is being fired/updated. The behavior depends on whether the field uses
        buttons. If it has buttons, then it is fired when the user clicks the apply button AND the date/time is valid.
        If it doesn't have buttons, then it is fired every time a valid change is made to the date or time." desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]" class="flex__item flex__item--msfix"></px-demo-props>

      <px-demo-code-editor slot="px-demo-code-editor" props="{{props}}" config="[[chosenConfig]]" class="flex__item flex__item--msfix"></px-demo-code-editor>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <p class="u-mb0">Event fired: <strong>moment-obj-changed</strong></p>
        <p class="zeta u-mt0">See API Reference below for more details</p>
        <p class="u-mb++">Submitted date: <strong>{{props.momentObj.value}}</strong></p>

        <px-datetime-field moment-obj="{{props.momentObj.value}}" date-format="{{props.dateFormat.value}}" time-format="{{props.timeFormat.value}}" required="{{props.required.value}}" show-buttons="{{props.showButtons.value}}" allow-wrap="{{props.allowWrap.value}}" block-future-dates="{{props.blockFutureDates.value}}" block-past-dates="{{props.blockPastDates.value}}" hide-time="{{props.hideTime.value}}" hide-date="{{props.hideDate.value}}" show-time-zone="{{props.showTimeZone.value}}" hide-icon="{{props.hideIcon.value}}" time-zone="{{props.timeZone.value}}" min-date="{{props.minDate.value}}" max-date="{{props.maxDate.value}}">
        </px-datetime-field>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" element-name="px-datetime-field" links-includes="[[linksIncludes]]" suppress-property-values="[[suppressPropertyValues]]">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-datetime-field" hide="[[apiHide]]">
    </px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-datetime-field-demo',

  properties: {

    /**
     * Note: The actual data/values for `props` are placed in `this.demoProps`
     * to create a static reference that Polymer shouldn't overwrite.
     *
     * On object containing all the properties the user can configure for this
     * demo. Usually a pretty similar copy of the component's `properties` block
     * with some additional sugar added to describe what kind of input the
     * user will be shown and how that input should be configured.
     *
     * Note that `value` for each property is the default that will be set
     * unless a config from `configs` is applied by default.
     *
     *
     * @property demoProps
     * @type {Object}
     */
    props: {
      type: Object,
      value: function(){
        var props =  this.demoProps;
            props.timeZone.inputLocalCandidates = Px.moment.tz.names();
          return props;
        }
    },
    suppressPropertyValues: {
      type: Array,
      value: function() { return ['momentObj']; }
    },
    /**
     * An array of pre-configured `props` that can be used to provide the user
     * with a set of common examples. These configs will be made available
     * as a set of tabs the user can click that will automatically change
     * the `props` to specific values.
     *
     * @property demoProps
     * @type {Array}
     */
    configs: {
      type: Array,
      value: function(){
        return [

          { configName: "Blank state",
            dateFormat: "YYYY/MM/DD",
            timeFormat: "hh:mm:ss A",
            showButtons: false,
            allowWrap: false,
            blockFutureDates: false,
            blockPastDates: false,
            hideTime: false,
            hideDate: false,
            hideIcon: false,
            showTimeZone: "dropdown",
            timeZone: "UTC",
            momentObj: null},

          { configName: "Predefined date",
            dateFormat: "MM/DD/YY",
            timeFormat: "hh:mm:ss A",
            showButtons: true,
            allowWrap: true,
            blockFutureDates: true,
            blockPastDates: false,
            hideTime: false,
            hideDate: false,
            hideIcon: false,
            showTimeZone: "abbreviatedText",
            timeZone: "America/Los_Angeles",
            momentObj: Px.moment() },

          { configName: "Min/Max date",
            dateFormat: "DD/MM/YY",
            timeFormat: "HH:mm:ss.SSS",
            showButtons: false,
            allowWrap: false,
            blockFutureDates: false,
            blockPastDates: false,
            hideTime: false,
            hideDate: false,
            hideIcon: false,
            showTimeZone: "dropdown",
            timeZone: "America/New_York",
            momentObj: Px.moment().startOf('day') },
        ]
      }
    },
    apiHide: {
      type: Array,
      value: function() {
        return [
          "keyBindings",
        ]
      }
    },
    timeZoneList: {
      type: Array,
      value: function(){
        return [
          Px.moment.tz.names()
        ]
      }
    },
    timeZone:{
      type: String,
      value: 'UTC'
    }
  },

  /**
   * A reference for `this.props`. Read the documentation there.
   */
  demoProps: {

    hideDate: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    hideTime: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    hideIcon: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    required: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    showButtons: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    allowWrap: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    blockFutureDates: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    blockPastDates: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    dateFormat: {
      type: String,
      defaultValue: 'YYYY/MM/DD',
      inputType: 'text',
      inputPlaceholder: 'YYYY/MM/DD'
    },

    timeFormat: {
      type: String,
      defaultValue: 'HH:mm:ss',
      inputType: 'text',
      inputPlaceholder: 'HH:mm:ss'
    },

    timeZone: {
      type: String,
      defaultValue: 'UTC',
      inputType: 'typeahead',
      inputPlaceholder: 'UTC',
      inputLocalCandidates: []
    },

    showTimeZone: {
      type: String,
      defaultValue: 'dropdown',
      inputType: 'dropdown',
      inputChoices: ['none', 'dropdown', 'extendedDropdown', 'text', 'abbreviatedText']
    },

    minDate: {
      type: String,
      defaultValue: Px.moment().subtract(3, 'month').toISOString(),
      inputType: 'text',
      inputPlaceholder: 'ISOString'
    },

    maxDate: {
      type: String,
      defaultValue: Px.moment().add(3, 'month').toISOString(),
      inputType: 'text'
    },

    momentObj: {
      type: Object,
      defaultValue: null
    },
  },

  ready: function () {
    this.linksIncludes = ['px-datetime-common/px-polygit-imports-datetime.html'];
  }
});
