/**
 * Removes white/light backgrounds from an image and returns a transparent version
 * Uses canvas to process pixels and make white/near-white pixels transparent
 */
export const removeWhiteBackground = (
  imageSrc: string,
  threshold: number = 240 // pixels with R, G, B all above this become transparent
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      
      // Draw the image
      ctx.drawImage(img, 0, 0);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Process each pixel
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // If pixel is white/near-white, make it transparent
        if (r >= threshold && g >= threshold && b >= threshold) {
          data[i + 3] = 0; // Set alpha to 0
        }
      }
      
      // Put the modified data back
      ctx.putImageData(imageData, 0, 0);
      
      // Return as data URL
      resolve(canvas.toDataURL("image/png"));
    };
    
    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
    
    img.src = imageSrc;
  });
};

/**
 * Processes an image to have white logo content (inverts dark logos)
 * and transparent background
 */
export const processLogoForDarkBackground = (
  imageSrc: string,
  threshold: number = 240
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }
      
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      
      // Draw the image
      ctx.drawImage(img, 0, 0);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      // Process each pixel
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        // If pixel is white/near-white (background), make it transparent
        if (r >= threshold && g >= threshold && b >= threshold) {
          data[i + 3] = 0; // Set alpha to 0
        } else {
          // Invert the colors to make dark content white
          data[i] = 255 - r;
          data[i + 1] = 255 - g;
          data[i + 2] = 255 - b;
        }
      }
      
      // Put the modified data back
      ctx.putImageData(imageData, 0, 0);
      
      // Return as data URL
      resolve(canvas.toDataURL("image/png"));
    };
    
    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
    
    img.src = imageSrc;
  });
};
