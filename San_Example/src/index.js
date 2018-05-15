import san from 'san';
import {router} from 'san-router';
import helloWorld from './components/table.san';

router.add({rule: '/', Component: helloWorld, target: 'body'});
router.start();
