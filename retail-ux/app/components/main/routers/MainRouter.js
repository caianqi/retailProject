import Marionette from 'backbone.marionette';
import MainController from '../controller/MainController';

export default Marionette.AppRouter.extend({
  controller: MainController,


  // "someMethod" must exist at controller.someMethod
  appRoutes: {
    'main': 'showMain'
  }
});