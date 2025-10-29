// Image optimization guide
// Run this manually to optimize images:
// 1. Install: npm install -g sharp-cli
// 2. Optimize: npx sharp -i src/assets/*.jpg -o src/assets/optimized/ -f webp -q 80
// 3. Also create smaller versions: npx sharp -i src/assets/*.jpg -o src/assets/optimized/ --resize 800 -f webp -q 80

console.log('Image Optimization Guide:');
console.log('1. Install sharp-cli: npm install sharp-cli --save-dev');
console.log('2. Convert to WebP: npx sharp-cli --input "src/assets/*.{jpg,png}" --output "src/assets/" --format webp --quality 80');
console.log('3. Images should be < 200KB each for optimal performance');
console.log('4. Consider using responsive images with srcset');
