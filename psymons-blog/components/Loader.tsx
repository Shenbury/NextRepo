export default function Loader(loaderProps: ILoaderProps) {
  return loaderProps.show ? <div className="loader"> </div> : null;
}