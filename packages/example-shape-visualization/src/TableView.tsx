import * as M from "@mui/material"
import { Selection, UserData } from "spec-cluster"

export default function TableView() {
  const userData = UserData.useContext()
  const selection = Selection.useContext()
  const selectedIds = Array.from(selection.selection)
  const selectedId = selectedIds[0]
  const spectrogram = userData.spectrograms.get(selectedId)

  //need to refactor this error message
  // if (spectrogram == null) {
  //   throw Error(`TableView could not find spectrogram by id: ${selectedId}`)
  // }
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <M.TableContainer component={M.Paper} style={{ maxHeight: "200px" }}>
        <M.Table stickyHeader>
          <M.TableHead>
            <M.TableRow>
              {/* need to change entries to high level data */}
              <M.TableCell style={{ fontWeight: "bold" }}>Filename</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Dim1</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Dim2</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Dim3</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Color</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>
                Location(Made Up)
              </M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Label</M.TableCell>
            </M.TableRow>
          </M.TableHead>
          <M.TableBody>
            {selectedIds.length === 0 ? (
              <M.TableRow>
                <M.TableCell colSpan={7}>No spectrograms selected</M.TableCell>
              </M.TableRow>
            ) : (
              selectedIds.map(id => {
                const spectrogram = userData.spectrograms.get(id)
                return spectrogram ? (
                  <M.TableRow key={id}>
                    <M.TableCell>{spectrogram.filename}</M.TableCell>
                    <M.TableCell>{spectrogram.dim1}</M.TableCell>
                    <M.TableCell>{spectrogram.dim2}</M.TableCell>
                    <M.TableCell>{spectrogram.dim3}</M.TableCell>
                    <M.TableCell>{spectrogram.color}</M.TableCell>
                    <M.TableCell>{spectrogram.flocation}</M.TableCell>
                    <M.TableCell>{spectrogram.label}</M.TableCell>
                  </M.TableRow>
                ) : (
                  <M.TableRow key={id}>
                    <M.TableCell colSpan={7}>No data available</M.TableCell>
                  </M.TableRow>
                )
              })
            )}
          </M.TableBody>
        </M.Table>
      </M.TableContainer>
    </div>
  )
}
