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

package com.facebook.litho.triggers;

import static org.assertj.core.api.Java6Assertions.assertThat;

import com.facebook.litho.ComponentContext;
import com.facebook.litho.ComponentTree;
import com.facebook.litho.Handle;
import com.facebook.litho.testing.LegacyLithoViewRule;
import com.facebook.litho.testing.testrunner.LithoTestRunner;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(LithoTestRunner.class)
public class EventTriggerTest {

  public final @Rule LegacyLithoViewRule mLegacyLithoViewRule = new LegacyLithoViewRule();

  @Test
  public void testCanTriggerEvent() {
    final ComponentContext mComponentContext = mLegacyLithoViewRule.getContext();
    final Handle handle = new Handle();
    final ComponentWithTrigger component =
        ComponentWithTrigger.create(mComponentContext).handle(handle).uniqueString("A").build();

    mLegacyLithoViewRule.attachToWindow().setRoot(component).layout().measure();
    final ComponentTree tree = mLegacyLithoViewRule.getComponentTree();

    assertThat(ComponentWithTrigger.testTriggerMethod(tree.getContext(), handle)).isEqualTo("A");
  }

  @Test
  public void testCanTriggerEventOnNestedComponent() {
    final ComponentContext mComponentContext = mLegacyLithoViewRule.getContext();
    final Handle handle = new Handle();
    final ComponentContainer component =
        ComponentContainer.create(mComponentContext)
            .componentWithTriggerHandle(handle)
            .uniqueString("A")
            .build();

    mLegacyLithoViewRule.attachToWindow().setRoot(component).layout().measure();
    final ComponentTree tree = mLegacyLithoViewRule.getComponentTree();

    assertThat(ComponentWithTrigger.testTriggerMethod(tree.getContext(), handle)).isEqualTo("A");
  }
}
