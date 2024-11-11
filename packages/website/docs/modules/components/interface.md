---
sidebar_position: 4
title: Interface
---
The Interface component utilizes Material-UI (MUI) to provide a user interface for adjusting scale values along three axes (X, Y, and Z). It integrates with the **configurator** context to manage the scale states dynamically, allowing users to interactively modify the scaling of visual elements in your application.

### Usage
To use the Interface component, simply import it into your React component and include it in your component tree. You can also pass custom styles through the `sx` prop if needed.

```javascript
import Interface from './path/to/Interface';

<Interface sx={{ customStyle }} />
```

### Integration with Configurator Context
The Interface component connects with the configurator context to dynamically manage scale values for the X, Y, and Z axes. These values are reflected in real-time as users interact with the interface, allowing you to adjust spectrogram objects based on the scale settings.

```typescript
const { scaleX, setScaleX ... } = ConfigContext.useContext()
<...>
<M.Slider
    sx={{
    value={scaleX}
    onChange={(_, value) =>
    setScaleX(Array.isArray(value) ? value[0] : value)}/>
<...>
```

#### How It Works
The Configurator context manages the scale values for the X, Y, and Z axes.
The Interface component renders Material-UI sliders that allow users to adjust these scale values.
When a user interacts with the sliders, the scale values in the Configurator context are updated.

### Customizing the Component
The Interface component is highly customizable using the sx prop, which allows you to adjust its layout, styling, and behavior. You can change the position, size, and appearance of elements like sliders, labels, and typography. 

For example, you can modify the component’s positioning, such as setting it to fixed or adjusting padding, and customize the sliders by changing their width, color, or range (e.g., min, max, and step values). You can also style the text labels and form controls, adjusting font size, weight, and color to match your application's design.