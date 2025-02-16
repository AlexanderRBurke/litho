/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.samples.litho.kotlin.documentation

import com.facebook.litho.annotations.Prop
import com.facebook.litho.sections.Children
import com.facebook.litho.sections.SectionContext
import com.facebook.litho.sections.annotations.GroupSectionSpec
import com.facebook.litho.sections.annotations.OnCreateChildren
import com.facebook.litho.sections.common.SingleComponentSection
import com.facebook.litho.widget.EmptyComponent as MyComponent
import com.facebook.litho.widget.Text

// start_example
@GroupSectionSpec
object SimpleGroupSectionSpec {

  @OnCreateChildren
  fun onCreateChildren(c: SectionContext, @Prop title: String): Children =
      Children.create()
          // highlight-start
          .child(SingleComponentSection.create(c).component(Text.create(c).text(title).build()))
          .child(SingleComponentSection.create(c).component(MyComponent.create(c).build()))
          // highlight-end
          .build()
}
// end_example
