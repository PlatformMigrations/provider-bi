
    export type RemoteKeys = 'federation_consumer/SelectCampaing' | 'federation_consumer/ComboboxCampaing';
    type PackageType<T> = T extends 'federation_consumer/ComboboxCampaing' ? typeof import('federation_consumer/ComboboxCampaing') :T extends 'federation_consumer/SelectCampaing' ? typeof import('federation_consumer/SelectCampaing') :any;