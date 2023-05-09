import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { registerLicense } from '@syncfusion/ej2-base';
import {ContextProvider} from './pages/dashboard/contexts/ContextProvider'

// Registering Syncfusion license key
registerLicense('Mgo+DSMBaFt+QHFqVkNrXVNbdV5dVGpAd0N3RGlcdlR1fUUmHVdTRHRcQlliTX5bdEJnXnZXcnI=;Mgo+DSMBPh8sVXJ1S0d+X1RPd11dXmJWd1p/THNYflR1fV9DaUwxOX1dQl9gSXpSckVrW3haeHRVQ2Y=;ORg4AjUWIQA/Gnt2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0FjUX1ZdHxVR2ha;MTcyNDc5NkAzMjMxMmUzMTJlMzMzNWtIUVF6SGZaVTBmWVRJY05GTkVYN2pjL1VMQ2NNYjRBenV3eHZDZFJiVFU9;MTcyNDc5N0AzMjMxMmUzMTJlMzMzNU4zNzkrZ05mOUpuWGRmWElrOXJ0RzEzMkQzY042YkZCZjJqSnlKQ2Faalk9;NRAiBiAaIQQuGjN/V0d+XU9Hc1RDX3xKf0x/TGpQb19xflBPallYVBYiSV9jS31TckRnWXdcd3BdR2BYVw==;MTcyNDc5OUAzMjMxMmUzMTJlMzMzNW1WdTJVM3lHeVJPMHZiQW8zbFB5aW9ock1aZkkyRW1rejlaS2ZiUENxT0k9;MTcyNDgwMEAzMjMxMmUzMTJlMzMzNUJ5bFV4RmJ1SHVZRlprSFN2MXVDUjEzMUJBK1JQNlFZOTVodkw5c2xpeTQ9;Mgo+DSMBMAY9C3t2VFhhQlJBfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hSn5Xd0FjUX1ZdHxUQWJa;MTcyNDgwMkAzMjMxMmUzMTJlMzMzNWpyY3E2NzNiMXR6QmtLRVdHakQ4VjVCemszTktyWGdTcUtKK3VuMVl6aEU9;MTcyNDgwM0AzMjMxMmUzMTJlMzMzNUllNHBkeFRvU3NQN2MvSkhieUtrUFI5WWorY0xqbTFvU1FqVllrbFAyMlE9;MTcyNDgwNEAzMjMxMmUzMTJlMzMzNW1WdTJVM3lHeVJPMHZiQW8zbFB5aW9ock1aZkkyRW1rejlaS2ZiUENxT0k9');



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContextProvider><BrowserRouter><App /></BrowserRouter></ContextProvider>);