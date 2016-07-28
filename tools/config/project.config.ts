import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';
import { InjectableDependency } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Suggenda deneme';

    const seedDependencies = this.NPM_DEPENDENCIES;

<<<<<<< HEAD
    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];
=======
    // Add third-party libraries to be injected/bundled.
    
    let additional_deps: InjectableDependency[] = [
    ];

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps); 
     
    this.SYSTEM_CONFIG.paths['firebase'] = `${this.APP_BASE}node_modules/firebase/firebase`; 
    this.SYSTEM_BUILDER_CONFIG.paths['firebase'] = `node_modules/firebase/firebase.js`;
    // { src: 'jquery/dist/jquery.min.js', inject: 'libs' }
>>>>>>> 02c051534238d75ead4d40e2c998f190666426b2

    /* Add to or override NPM module configurations: */
    // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
  }

}
