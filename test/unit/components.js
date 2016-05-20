import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {expect} from 'chai'
import Container, {Nav} from '../../src/components/Nav'
import sinon from 'sinon'

describe.only('<Nav>', () => {
  let login_props,IndexLink,Link,logout_props;
  beforeEach(()=>{
    login_props={
      location:{pathname:'/'},
      currentUser:{name:'Vikcen'}
    },
    logout_props={
      location:{pathname:'/'},
      currentUser:{}
    }
  });
  it("contains .navbar with an expectation", function() {
    expect(shallow(<Nav {...login_props} />).is('.navbar')).to.equal(true);
  });
  it("after login, 4 options to navigate", function() {
    expect(shallow(<Nav {...login_props} />).find('li').length).to.equal(4);
  });
  it("the default post is active ", function() {
    let ele=shallow(<Nav {...logout_props} />).find('li.active')
    expect(ele.contains('Posts')).to.equal(true);
  });
  it("before login 2 options nav ", function() {
    let eles=shallow(<Nav {...logout_props} />).find('li'),count=0;
    eles.forEach((ele)=>{
      ele.text()? count++ : count;
    })
    expect(count).to.equal(2);
  });
})

import App from '../../src/components/App'

describe.only('<Nav>', () => {
  let login_props,IndexLink,Link,logout_props;
  beforeEach(()=>{
    login_props={
      location:{pathname:'/'},
      currentUser:{name:'Vikcen'}
    },
    logout_props={
      location:{pathname:'/'},
      currentUser:{}
    }
  });
  it("contains .navbar with an expectation", function() {
    expect(shallow(<Nav {...login_props} />).is('.navbar')).to.equal(true);
  });
  it("after login, 4 options to navigate", function() {
    expect(shallow(<Nav {...login_props} />).find('li').length).to.equal(4);
  });
  it("the default post is active ", function() {
    let ele=shallow(<Nav {...logout_props} />).find('li.active')
    expect(ele.contains('Posts')).to.equal(true);
  });
  it("before login 2 options nav ", function() {
    let eles=shallow(<Nav {...logout_props} />).find('li'),count=0;
    eles.forEach((ele)=>{
      ele.text()? count++ : count;
    })
    expect(count).to.equal(2);
  });
})
