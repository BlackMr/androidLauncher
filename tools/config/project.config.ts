import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';

    // Add third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps); 
      this.SYSTEM_CONFIG.paths['firebase'] = `${this.APP_BASE}node_modules/firebase/firebase`; 
      this.SYSTEM_BUILDER_CONFIG.paths['firebase'] = `node_modules/firebase/firebase.js`; 
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    /* Add to or override NPM module configurations: */
    //this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
