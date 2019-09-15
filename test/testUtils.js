import checkPropTypes from 'check-prop-types';


/**
  * Return node(s) with the given data-test attribute.
  * @param {ShawllowWrapper} wrapper - Enzyme shallow wrapper.
  * @param {string} val - Value of data-test attribute for search.
  * @returns {ShawllowWrapper}
*/

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const CheckProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}