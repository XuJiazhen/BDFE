import san from 'san';
import {router} from 'san-router';
import helloWorld from './app.san';

router.add({rule: '/', Component: helloWorld, target: 'body'});
router.start();
