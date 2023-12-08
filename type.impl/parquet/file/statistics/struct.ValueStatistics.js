(function() {var type_impls = {
"parquet":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#469-600\">source</a><a href=\"#impl-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"parquet/data_type/private/trait.ParquetValueType.html\" title=\"trait parquet::data_type::private::ParquetValueType\">ParquetValueType</a>&gt; <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#471-488\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.new\" class=\"fn\">new</a>(\n    min: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;,\n    max: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;,\n    distinct_count: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;,\n    null_count: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>,\n    is_min_max_deprecated: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates new typed statistics.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_min_is_exact\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#494-499\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.with_min_is_exact\" class=\"fn\">with_min_is_exact</a>(self, is_min_value_exact: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set whether the stored <code>min</code> field represents the exact\nminimum, or just a bound on the minimum value.</p>\n<p>see <a href=\"parquet/file/statistics/struct.ValueStatistics.html#method.min_is_exact\" title=\"method parquet::file::statistics::ValueStatistics::min_is_exact\"><code>Self::min_is_exact</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_max_is_exact\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#505-510\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.with_max_is_exact\" class=\"fn\">with_max_is_exact</a>(self, is_max_value_exact: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set whether the stored <code>max</code> field represents the exact\nmaximum, or just a bound on the maximum value.</p>\n<p>see <a href=\"parquet/file/statistics/struct.ValueStatistics.html#method.max_is_exact\" title=\"method parquet::file::statistics::ValueStatistics::max_is_exact\"><code>Self::max_is_exact</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_backwards_compatible_min_max\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#517-522\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.with_backwards_compatible_min_max\" class=\"fn\">with_backwards_compatible_min_max</a>(\n    self,\n    backwards_compatible: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set whether to write the deprecated <code>min</code> and <code>max</code> fields\nfor compatibility with older parquet writers</p>\n<p>This should only be enabled if the field is signed,\nsee <a href=\"parquet/file/statistics/struct.ValueStatistics.html#method.is_min_max_backwards_compatible\" title=\"method parquet::file::statistics::ValueStatistics::is_min_max_backwards_compatible\"><code>Self::is_min_max_backwards_compatible</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#528-530\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.min\" class=\"fn\">min</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns min value of the statistics.</p>\n<p>Panics if min value is not set, e.g. all values are <code>null</code>.\nUse <code>has_min_max_set</code> method to check that.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#536-538\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.max\" class=\"fn\">max</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;T</a></h4></section></summary><div class=\"docblock\"><p>Returns max value of the statistics.</p>\n<p>Panics if max value is not set, e.g. all values are <code>null</code>.\nUse <code>has_min_max_set</code> method to check that.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#544-546\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.min_bytes\" class=\"fn\">min_bytes</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Returns min value as bytes of the statistics.</p>\n<p>Panics if min value is not set, use <code>has_min_max_set</code> method to check\nif values are set.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_bytes\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#552-554\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.max_bytes\" class=\"fn\">max_bytes</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Returns max value as bytes of the statistics.</p>\n<p>Panics if max value is not set, use <code>has_min_max_set</code> method to check\nif values are set.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.has_min_max_set\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#558-560\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.has_min_max_set\" class=\"fn\">has_min_max_set</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Whether or not min and max values are set.\nNormally both min/max values will be set to <code>Some(value)</code> or <code>None</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_is_exact\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#563-565\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.max_is_exact\" class=\"fn\">max_is_exact</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Whether or not max value is set, and is an exact value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.min_is_exact\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#568-570\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.min_is_exact\" class=\"fn\">min_is_exact</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Whether or not min value is set, and is an exact value.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.distinct_count\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#573-575\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.distinct_count\" class=\"fn\">distinct_count</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns optional value of number of distinct values occurring.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.null_count\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#578-580\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.null_count\" class=\"fn\">null_count</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a></h4></section></summary><div class=\"docblock\"><p>Returns null count.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_min_max_deprecated\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#583-585\">source</a><h4 class=\"code-header\">fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.is_min_max_deprecated\" class=\"fn\">is_min_max_deprecated</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if statistics were created using old min/max fields.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_min_max_backwards_compatible\" class=\"method\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#597-599\">source</a><h4 class=\"code-header\">pub fn <a href=\"parquet/file/statistics/struct.ValueStatistics.html#tymethod.is_min_max_backwards_compatible\" class=\"fn\">is_min_max_backwards_compatible</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Old versions of parquet stored statistics in <code>min</code> and <code>max</code> fields, ordered\nusing signed comparison. This resulted in an undefined ordering for unsigned\nquantities, such as booleans and unsigned integers.</p>\n<p>These fields were therefore deprecated in favour of <code>min_value</code> and <code>max_value</code>,\nwhich have a type-defined sort order.</p>\n<p>However, not all readers have been updated. For backwards compatibility, this method\nreturns <code>true</code> if the statistics within this have a signed sort order, that is\ncompatible with being stored in the deprecated <code>min</code> and <code>max</code> fields</p>\n</div></details></div></details>",0,"parquet::file::statistics::TypedStatistics"],["<section id=\"impl-StructuralEq-for-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#448\">source</a><a href=\"#impl-StructuralEq-for-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section>","StructuralEq","parquet::file::statistics::TypedStatistics"],["<section id=\"impl-StructuralPartialEq-for-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#448\">source</a><a href=\"#impl-StructuralPartialEq-for-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section>","StructuralPartialEq","parquet::file::statistics::TypedStatistics"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#628-644\">source</a><a href=\"#impl-Debug-for-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"parquet/data_type/private/trait.ParquetValueType.html\" title=\"trait parquet::data_type::private::ParquetValueType\">ParquetValueType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#629-643\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","parquet::file::statistics::TypedStatistics"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#448\">source</a><a href=\"#impl-Clone-for-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#448\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","parquet::file::statistics::TypedStatistics"],["<section id=\"impl-Eq-for-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#448\">source</a><a href=\"#impl-Eq-for-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section>","Eq","parquet::file::statistics::TypedStatistics"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#602-626\">source</a><a href=\"#impl-Display-for-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"parquet/data_type/private/trait.ParquetValueType.html\" title=\"trait parquet::data_type::private::ParquetValueType\">ParquetValueType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#603-625\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","parquet::file::statistics::TypedStatistics"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ValueStatistics%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#448\">source</a><a href=\"#impl-PartialEq-for-ValueStatistics%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/parquet/file/statistics.rs.html#448\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"parquet/file/statistics/struct.ValueStatistics.html\" title=\"struct parquet::file::statistics::ValueStatistics\">ValueStatistics</a>&lt;T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","parquet::file::statistics::TypedStatistics"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()