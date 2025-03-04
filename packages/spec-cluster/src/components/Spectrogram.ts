export enum RenderMode {
  image = "image",
  dot = "dot",
}

export enum ShapeType {
  cube = "cube",
  pyramid = "pyramid",
  sphere = "sphere",
}

export type SpectrogramProperties = Record<string, unknown>

export type Spectrogram<T = SpectrogramProperties> = {
  id: string
  dim1: number
  dim2: number
  dim3: number
  image: File | string
  properties: T
  audio?: File | string
  color?: string //ThreeFiber.MeshStandardMaterialProps["color"]
  height?: number
  label?: string
  shape?: ShapeType
  size?: number
  width?: number
}
