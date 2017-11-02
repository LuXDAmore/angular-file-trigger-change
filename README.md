# angular-file-trigger-change @ ngFileTriggerChange
Angular Directive: trigger a change for input[type=file].

# Usage / Installation
- Add 'ngFileTriggerChange' to your modules;
- Add the Directive 'ng-file-trigger-change' to your html code;
- You're ready.

# Example
<input
  type="file"
  ng-model="vm.files"
  ng-change="vm.fileChanged()"
  ng-file-trigger-change
  accept="image/*"
  capture
  multiple
/>
