import type { SharedComponentProps } from '@/shared'
import { useEffect, useState, cloneElement } from 'react'
import { WithClassName } from '../utils';
import OfflineInfo from './offline-info';


type NetworkStateProps = SharedComponentProps<HTMLDivElement> & {
    onlineContent?: React.ReactNode;
    offlineContent?: React.ReactNode;
};


const InternetOnline = ({children, className, ...rest}: NetworkStateProps) => {

  return (
    <WithClassName className={className}>
        <div className={`network-state network-state__online ${className}`} {...rest}>
            {children}
        </div>
    </WithClassName>
  )
}

const InternetOffline = ({children, className, ...rest}: NetworkStateProps) => {

  return (
    <WithClassName className={className} {...rest}>
        <div className='network-state network-state__offline'>
            {children}
        </div>
    </WithClassName>
  )
}

export const NetworkState = (props: NetworkStateProps) => {

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  const handleOnline = () => setIsOnline(true);
  const handleOffline = () => setIsOnline(false);
  
  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };

  }, []);

  return isOnline ? <InternetOnline children={props.onlineContent} {...props} /> : <InternetOffline children={props.offlineContent || <OfflineInfo />} {...props} />;
}

export default NetworkState