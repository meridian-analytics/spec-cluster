import * as M from "@mui/material"
import * as React from "react"
import { Selection, UserData } from "spec-cluster"

export default function TableView() {
  const { spectrograms } = UserData.useContext()
  const { selection } = Selection.useContext()
  const selectedIds = Array.from(selection)
  const selectedId = selectedIds[0]
  const spectrogram = spectrograms.get(selectedId)

  if (spectrogram == null) {
    throw Error(`TableView could not find spectrogram by id: ${selectedId}`)
  }
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <M.TableContainer component={M.Paper} style={{ maxHeight: "200px" }}>
        <M.Table stickyHeader>
          <M.TableHead>
            <M.TableRow>
              <M.TableCell style={{ fontWeight: "bold" }}>Filename</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Dim1</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Dim2</M.TableCell>
              <M.TableCell style={{ fontWeight: "bold" }}>Dim3</M.TableCell>
            </M.TableRow>
          </M.TableHead>
          <M.TableBody>
            {selectedIds.map(id => {
              const spectrogram = spectrograms.get(id)
              return spectrogram ? (
                <M.TableRow key={id}>
                  <M.TableCell>{spectrogram.filename}</M.TableCell>
                  <M.TableCell>{spectrogram.dim1}</M.TableCell>
                  <M.TableCell>{spectrogram.dim2}</M.TableCell>
                  <M.TableCell>{spectrogram.dim3}</M.TableCell>
                </M.TableRow>
              ) : (
                <M.TableRow key={id}>
                  <M.TableCell colSpan={4}>No data available</M.TableCell>
                </M.TableRow>
              )
            })}
          </M.TableBody>
        </M.Table>
      </M.TableContainer>
    </div>
  )
}
