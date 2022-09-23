AFRAME.registerComponent('start', {
    init: function() {
        let center = document.createElement('a-entity');
        center.setAttribute('rotation', '0 0 0');
        center.setAttribute('animation', {property: 'rotation', to: '0 360 0', easing: 'linear', repeat: 'indefinite', loop: 'true', dur: '15000'});
        for (let i = 0; i < 20; ++i) {
            var box = document.createElement('a-entity');
            box.setAttribute('gltf-model', "assets/trapezoid.gltf");
            box.setAttribute('position', {x: (5 - i * .5), y: (10 - i), z: (0 - i)});
            box.setAttribute('color', '#E5A72E');
            box.setAttribute('animation', {property: 'position', from: {x: (5 - i * .5), y: (10 - i), z: (0 - i)}, to: {x: (5 - i * .5), y: (10 - i * 1.5), z: (0 - i)}, dur: 2000, dir: 'alternate', repeat: 'indefinite', loop: 'true'});
            center.appendChild(box);
        }
        document.getElementsByTagName('a-scene')[0].appendChild(center);
    }
});

/*experimenting with accessing gltf components https://aframe.io/docs/1.3.0/introduction/models.html#modifying-materials*/
AFRAME.registerComponent('modify-materials', {
    init: function () {
        this.el.addEventListener('model-loaded', () => {
        const obj = this.el.getObject3D('mesh');
        console.log("got mesh");
        obj.traverse(node => {
            node.material.set(10);
          
        });
      });
    }
});