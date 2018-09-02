/*
 * Copyright (c) 2018 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { shallow } from "enzyme"
import * as React from "react"

import {
  ExternalRedirect,
  Render,
  RenderProps
} from "components/ExternalRedirect/ExternalRedirect"

import { search } from "_/helpers"
import { mockLocationAssign } from "_/mocks/vendor/browser/location"

/* ----------------------------------------------------------------------------
 * Tests
 * ------------------------------------------------------------------------- */

/* External redirect component */
describe("components/ExternalRedirect", () => {

  /* Render component */
  describe("Render", () => {

    /* Default props */
    const props: RenderProps = {
      href: "__HREF__"
    }

    /* Test: should render with default props */
    it("should render with default props", () => {
      const wrapper = shallow(<Render {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })

  /* Enhanced component */
  describe("ExternalRedirect", () => {

    /* Test: should render with default props */
    it("should render with default props", () => {
      mockLocationAssign()
      const wrapper = shallow(<ExternalRedirect href="__HREF__" />)
      expect(search(wrapper, Render)).toMatchSnapshot()
    })

    /* Test: should perform redirect after mount */
    it("should perform redirect after mount", () => {
      const assignMock = mockLocationAssign()
      shallow(<ExternalRedirect href="__HREF__" />)
      expect(assignMock).toHaveBeenCalled()
    })
  })
})
