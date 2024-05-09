import {useEffect, useRef} from 'react';
import RNBackgroundUpload from 'react-native-background-upload';

const useBackgroundTask = async () => {
  const taskId = useRef<any>(null);
  const bgExpiredRelease = useRef<any>(null);

  // Request background time
  taskId.current = await RNBackgroundUpload.beginBackgroundTask();

  // Listen to background time is about to expire events
  bgExpiredRelease.current = RNBackgroundUpload.addListener(
    'bgExpired',
    null,
    (data: any) => {
      if (taskId.current && data.id === taskId.current) {
        // do some cleanup
      }
    },
  );

  // run background code, do uploads, or even regular fetch requests

  // tell the OS we are done
  if (taskId.current !== null) {
    await RNBackgroundUpload.endBackgroundTask(taskId.current);
  }

  // remove event listener on unmount
  useEffect(() => {
    return () => {
      if (bgExpiredRelease.current) {
        bgExpiredRelease.current.remove();
      }
    };
  }, []);
};

export default useBackgroundTask;
