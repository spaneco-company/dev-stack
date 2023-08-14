export default {
    bind(el, binding, vnode) {
        const { value="" } = binding;
        el.addEventListener('mouseenter',()=> {
            el.classList.add(value)
        });
        el.addEventListener('mouseleave',()=> {
            el.classList.remove(value)
        });
    },
    unbind(el, binding, vnode) {
        el.removeEventListener('mouseenter');
        el.removeEventListener('mouseleave')
    }
};