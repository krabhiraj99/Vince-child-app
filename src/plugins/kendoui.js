import Vue from "vue";
// import "@progress/kendo-theme-default/dist/all.css";
import { VueInstance } from "@/store/index";

// import { Menu, TabStrip } from "@progress/kendo-vue-layout";
// import { Popup } from "@progress/kendo-vue-popup";
// import { Input } from "@progress/kendo-vue-inputs";
// import {
//   DropDownList,
//   ComboBox,
//   AutoComplete,
// } from "@progress/kendo-vue-dropdowns";
// import { Fade } from "@progress/kendo-vue-animation";
// import {
//   Notification,
//   NotificationGroup,
// } from "@progress/kendo-vue-notification";
// import { Dialog, DialogActionsBar } from "@progress/kendo-vue-dialogs";

// import {
//   Grid,
//   GridColumnMenuFilter,
//   GridColumnMenuSort,
//   GridColumnMenuItemGroup,
//   GridColumnMenuItemContent,
//   GridColumnMenuItem,
//   filterGroupByField,
// } from "@progress/kendo-vue-grid";
// import { Button } from "@progress/kendo-vue-buttons";
// Vue.component("k-grid", Grid);
// Vue.component("k-menu", Menu);
// Vue.component("k-popup", Popup);
// Vue.component("k-button", Button);
// Vue.component("k-input", Input);
// Vue.component("k-dropdownlist", DropDownList);
// Vue.component("k-combobox", ComboBox);
// Vue.component("k-autocomplete", AutoComplete);
// Vue.component("k-tabstrip", TabStrip);
// Vue.component("k-fade", Fade);
// Vue.component("k-notification", Notification);
// Vue.component("k-notificationgroup", NotificationGroup);
// Vue.component("k-dialog", Dialog);
// Vue.component("k-dialog-actions-bar", DialogActionsBar);
// Vue.component("k-gridcolumnmenufilter", GridColumnMenuFilter);
// Vue.component("k-gridcolumnmenusort", GridColumnMenuSort);
// Vue.component("k-gridcolumnmenuitemgroup", GridColumnMenuItemGroup);
// Vue.component("k-gridcolumnmenuitemcontent", GridColumnMenuItemContent);
// Vue.component("k-gridcolumnmenuitem", GridColumnMenuItem);

// VueInstance.component("k-grid", Grid);


// Vue.component("k-grid", window.KendoVueGrid.Grid);


VueInstance.component("k-grid", window.KendoVueGrid.Grid);
VueInstance.component("k-dropdownlist", window.KendoVueDropdowns.DropDownList);
VueInstance.component("k-input", window.KendoVueInputs.Input);


// Vue.component("k-grid", window.KendoVueGrid.Grid);
// Vue.component("k-dropdownlist", window.KendoVueDropdowns.DropDownList);
// Vue.component("k-input", window.KendoVueInputs.Input);


// VueInstance.component("k-menu", Menu);
// VueInstance.component("k-popup", Popup);
// VueInstance.component("k-button", Button);
// VueInstance.component("k-input", Input);
// VueInstance.component("k-dropdownlist", DropDownList);
// VueInstance.component("k-combobox", ComboBox);
// VueInstance.component("k-autocomplete", AutoComplete);
// VueInstance.component("k-tabstrip", TabStrip);
// VueInstance.component("k-fade", Fade);
// VueInstance.component("k-notification", Notification);
// VueInstance.component("k-notificationgroup", NotificationGroup);
// VueInstance.component("k-dialog", Dialog);
// VueInstance.component("k-dialog-actions-bar", DialogActionsBar);
// VueInstance.component("k-gridcolumnmenufilter", GridColumnMenuFilter);
// VueInstance.component("k-gridcolumnmenusort", GridColumnMenuSort);
// VueInstance.component("k-gridcolumnmenuitemgroup", GridColumnMenuItemGroup);
// VueInstance.component("k-gridcolumnmenuitemcontent", GridColumnMenuItemContent);
// VueInstance.component("k-gridcolumnmenuitem", GridColumnMenuItem);

// Vue.prototype.$filterGroupByField = filterGroupByField;

console.log("components in global of child app", Vue.options.components);
console.log(
  "components in global of parent app",
  VueInstance.options.components
);
